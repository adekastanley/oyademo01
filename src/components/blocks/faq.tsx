"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { useMobile } from "@/hooks/use-mobile";

interface FaqItem {
	question: string;
	answer: string;
}

export default function FaqSection() {
	const isMobile = useMobile();
	const [selectedFaq, setSelectedFaq] = useState<number>(0);
	const [openAccordion, setOpenAccordion] = useState<number | null>(null);

	const faqItems: FaqItem[] = [
		{
			question: "How do I create an account?",
			answer:
				"To create an account, click on the 'Sign Up' button in the top right corner of our website. Fill in your details including your name, email address, and password. Once submitted, you'll receive a verification email. Click the link in the email to verify your account and you're all set!",
		},
		{
			question: "What payment methods do you accept?",
			answer:
				"We accept a variety of payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted to ensure your financial information remains safe.",
		},
		{
			question: "How long does shipping take?",
			answer:
				"Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders can take 7-14 business days. Expedited shipping options are available at checkout for faster delivery. You'll receive a tracking number once your order ships.",
		},
		{
			question: "What is your return policy?",
			answer:
				"We offer a 30-day return policy for all unused and unopened items in their original packaging. To initiate a return, please visit your order history and select the items you wish to return. Once we receive and inspect the returned items, a refund will be issued to your original payment method within 5-7 business days.",
		},
		{
			question: "Do you offer international shipping?",
			answer:
				"Yes, we ship to over 100 countries worldwide. International shipping rates are calculated at checkout based on destination, weight, and selected shipping method. Please note that customers are responsible for any import duties or taxes that may apply in their country.",
		},
	];

	const toggleAccordion = (index: number) => {
		setOpenAccordion(openAccordion === index ? null : index);
	};

	useEffect(() => {
		// Reset accordion state when switching between mobile and desktop
		setOpenAccordion(null);
	}, [isMobile]);

	return (
		<div className="container mx-auto py-12 px-4">
			<h2 className="text-3xl font-bold text-center mb-12">
				Frequently Asked Questions
			</h2>

			{isMobile ? (
				// Mobile view - Accordion style
				<div className="space-y-4">
					{faqItems.map((faq, index) => (
						<div key={index} className="border rounded-lg overflow-hidden">
							<button
								onClick={() => toggleAccordion(index)}
								className="flex justify-between items-center w-full p-4 text-left font-medium"
							>
								{faq.question}
								<ChevronDown
									className={cn(
										"h-5 w-5 transition-transform duration-200",
										openAccordion === index ? "transform rotate-180" : ""
									)}
								/>
							</button>
							<div
								className={cn(
									"overflow-hidden transition-all duration-300",
									openAccordion === index ? "max-h-96 p-4 pt-0" : "max-h-0"
								)}
							>
								<p className="text-muted-foreground">{faq.answer}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				// Desktop view - Two column layout
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="md:col-span-1 space-y-2">
						{faqItems.map((faq, index) => (
							<button
								key={index}
								onClick={() => setSelectedFaq(index)}
								className={cn(
									"w-full text-left p-4 rounded-lg transition-colors",
									selectedFaq === index
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted"
								)}
							>
								{faq.question}
							</button>
						))}
					</div>
					<div className="md:col-span-2 bg-muted rounded-lg p-6">
						<h3 className="font-semibold text-xl mb-4">
							{faqItems[selectedFaq].question}
						</h3>
						<p className="text-muted-foreground">
							{faqItems[selectedFaq].answer}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

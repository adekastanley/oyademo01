import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
					<h2 className="text-4xl font-medium lg:text-5xl">
						OyaNow Lorem ipsum dolor sit.
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
						nesciunt, omnis sequi dolores sunt iure..
					</p>
				</div>

				<div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
					<Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
						<CardHeader>
							{/* <img
								className="h-6 w-fit dark:invert"
								src="https://html.tailus.io/blocks/customers/nike.svg"
								alt="Nike Logo"
								height="24"
								width="auto"
							/> */}
						</CardHeader>
						<CardContent>
							<blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
								<p className="text-xl font-medium">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deserunt doloremque provident dolorem deleniti consectetur
									consequatur ad saepe veniam voluptas eligendi!
								</p>

								<div className="grid grid-cols-[auto_1fr] items-center gap-3">
									<Avatar className="size-12">
										<AvatarImage
											src="https://tailus.io/images/reviews/shekinah.webp"
											alt="Shekinah Tshiokufila"
											height="400"
											width="400"
											loading="lazy"
										/>
										<AvatarFallback>ST</AvatarFallback>
									</Avatar>

									<div>
										<cite className="text-sm font-medium">
											Shekinah Tshiokufila
										</cite>
										<span className="text-muted-foreground block text-sm">
											Software Engineer
										</span>
									</div>
								</div>
							</blockquote>
						</CardContent>
					</Card>
					<Card className="md:col-span-2">
						<CardContent className="h-full pt-6">
							<blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
								<p className="text-xl font-medium">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Impedit, esse? Hic quidem iste nostrum facilis?
								</p>

								<div className="grid grid-cols-[auto_1fr] items-center gap-3">
									<Avatar className="size-12">
										<AvatarImage
											src="https://tailus.io/images/reviews/jonathan.webp"
											alt="Jonathan Yombo"
											height="400"
											width="400"
											loading="lazy"
										/>
										<AvatarFallback>JY</AvatarFallback>
									</Avatar>
									<div>
										<cite className="text-sm font-medium">Jonathan Yombo</cite>
										<span className="text-muted-foreground block text-sm">
											Software Ingineer
										</span>
									</div>
								</div>
							</blockquote>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="h-full pt-6">
							<blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									quam porro magni quas dolores!
								</p>

								<div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
									<Avatar className="size-12">
										<AvatarImage
											src="https://tailus.io/images/reviews/yucel.webp"
											alt="Yucel Faruksahan"
											height="400"
											width="400"
											loading="lazy"
										/>
										<AvatarFallback>YF</AvatarFallback>
									</Avatar>
									<div>
										<cite className="text-sm font-medium">
											Yucel Faruksahan
										</cite>
										<span className="text-muted-foreground block text-sm">
											Creator, Tailkits
										</span>
									</div>
								</div>
							</blockquote>
						</CardContent>
					</Card>
					<Card className="card variant-mixed">
						<CardContent className="h-full pt-6">
							<blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
									autem, deserunt aliquam voluptatum doloremque sint repellendus
									officia esse reiciendis vitae.r!
								</p>

								<div className="grid grid-cols-[auto_1fr] gap-3">
									<Avatar className="size-12">
										<AvatarImage
											src="https://tailus.io/images/reviews/rodrigo.webp"
											alt="Rodrigo Aguilar"
											height="400"
											width="400"
											loading="lazy"
										/>
										<AvatarFallback>YF</AvatarFallback>
									</Avatar>
									<div>
										<p className="text-sm font-medium">Rodrigo Aguilar</p>
										<span className="text-muted-foreground block text-sm">
											Creator, TailwindAwesome
										</span>
									</div>
								</div>
							</blockquote>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

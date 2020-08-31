import React from "react"
import { Link } from "gatsby"

const footer = props => {
	return (
		<div>
			<div class="footer bg-dark text-white">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-md-5 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">About</h6>
							<p class="small">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="col-md-2 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">Company</h6>
							<ul class="list-unstyled small">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about-us">About Us</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
								<li />
							</ul>
						</div>
						<div class="col-md-2 mb-3 mb-md-0">
							<h6 class="text-uppercase text-white-50">Services</h6>
							<ul class="list-unstyled small">
								<li>
									<Link to="/">Web Design</Link>
								</li>
								<li>
									<Link to="/">Content Creation</Link>
								</li>
								<li>
									<Link to="/">Development</Link>
								</li>
							</ul>
						</div>
						<div class="col-md-2 text-center mb-3 mb-md-0">
							<div class="social-icons">
								<a
									href="https://www.facebook.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i class="fa fa-facebook" />
								</a>
								<a
									href="https://twitter.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i class="fa fa-twitter" />
								</a>
								<a
									href="https://www.instagram.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i class="fa fa-instagram" />
								</a>
								<a
									href="https://www.linkedin.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<i class="fa fa-linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="container">
					<span>
						© 2019 All rights reserved. Designed and powered by {``}
						<a
							href="https://webriq.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							WebriQ
						</a>
						.
					</span>
				</div>
			</div>
		</div>
	)
}

export default footer

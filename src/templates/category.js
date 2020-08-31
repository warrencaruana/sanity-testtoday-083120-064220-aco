import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import SEO from "../components/seo"

const slugify = require("slugify")
const Category = ({ data }) => (
	<Layout>
		<SEO title="Latest Posts" description="description" />
		<div class="page-headline">
			<div class="container">
				<div class="section-heading text-center">
					<h6 class="font-weight-bold text-uppercase flair">Blog</h6>
					<h1>
						<strong>Latest Posts</strong>
					</h1>
				</div>
			</div>
		</div>
		<div class="blog-section">
			<Container>
				<div class="row justify-content-between">
					<div class="col-md-7">
						{data.allSanityPost.edges.map(blog => (
							<div class="blog-item bg-light" key={blog}>
								<div class="row">
									<div class="col-lg-4 pr-lg-0">
										<Link to={blog.node.slug.current}>
											<div
												class="blog-image h-100"
												style={{
													backgroundImage: `url(${
														blog.node.mainImage !== null
															? blog.node.mainImage.asset.fluid.src
															: "https://source.unsplash.com/user/joshhild/500x500"
													})`,
												}}
											/>
										</Link>
									</div>
									<div class="col-lg-8 pl-lg-0">
										<div class="blog-text">
											<Link to={blog.node.slug.current}>
												<h4>{blog.node.title}</h4>
											</Link>
											<div class="text-muted small">
												{blog &&
												blog.node &&
												blog.node.categories &&
												blog.node.categories.length !== 0
													? blog.node.categories.map(ct => (
															<span>
																<i class="fa fa-folder pr-1" />

																<Link to="/">{ct.title + " "}</Link>
															</span>
													  ))
													: null}
											</div>
											<p class="pt-2 text-muted">{blog.node.excerpt}</p>
											<span class="text-muted small">
												<i class="fa fa-calendar-o pr-1" />
												{blog.node.publishedAt}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div class="col-md-4 mb-4">
						<div class="side-content">
							<h6 class="text-uppercase text-muted">Categories</h6>
							<ul class="list-unstyled">
								{data.allSanityPost.group.map(cat => (
									<li key={cat.fieldValue}>
										<Link
											class="text-body font-weight-bold"
											to={slugify(cat.fieldValue.toLowerCase())}
										>
											{cat.fieldValue}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div class="side-content">
							<h6 class="text-uppercase text-muted">Keep Up-to-Date</h6>
							<p class="small">
								Get our latest news and updates straight to your inbox. Enter
								your email address to subscribe:
							</p>
							<form>
								<div class="form-group">
									<input
										class="form-control"
										type="email"
										id="categoryEmail"
										required=""
									/>
									<label htmlFor="categoryEmail">Email address</label>
								</div>
								<div class="form-group mb-4">
									<button class="btn btn-primary" type="submit">
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	</Layout>
)

export default Category

export const blogQuery = graphql`
	query CategoryTemplateQuery($title: String!) {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
		allSanityPost(
			filter: { categories: { elemMatch: { title: { eq: $title } } } }
			sort: { order: ASC, fields: publishedAt }
		) {
			edges {
				node {
					id
					title
					publishedAt(formatString: "MMMM DD, YYYY")
					mainImage {
						asset {
							fluid {
								src
							}
						}
					}
					excerpt
					slug {
						current
					}
					body
					categories {
						title
					}
				}
			}
			group(field: categories___title) {
				fieldValue
			}
		}
	}
`

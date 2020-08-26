const foot = document.getElementById("foot");
const title = document.createElement('h2');
title.textContent = "Adoptadog Blog";
title.className = "blog-title";
document.body.insertBefore(title, foot);
const blogs = document.createElement("section");
blogs.setAttribute("class", "blogs");
blogs.setAttribute("id", "maincontent");
const blog = document.createElement("article");
blog.setAttribute("class", "blog");

const allparagraphs = "duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";
const blog_one = ["./images/blog-1.jpg", "Girl sitting with arm around dog in the canyons", "Traveling With Your Dog", "travel"];
const blog_two = ["./images/blog-2.jpg", "Multiple Dogs on a leash going for a walk", "How To Walk Multiple Dogs", "walk"];
const blog_three = ["./images/blog-3.jpg", "Girl holding ball during sunset while dog patiently waits for her to throw it", "Teach Your Dog To Fetch!", "fetch"];

const all = [blog_one, blog_two, blog_three];

for (let x = 0; x < all.length; x += 1) {
	const object = all[x];
	const blogImage = document.createElement("div");
	//blogImage.setAttribute("class", "c1");
	blogImage.setAttribute("class", "c1 col-xs-12 col-sm-4");
	blogImage.setAttribute("id", object[3]);
	const image = document.createElement("img");
	image.setAttribute("src", object[0]);
	image.setAttribute("alt", object[1]);
	blogImage.appendChild(image);
	const blogContent = document.createElement("div");
	blogContent.setAttribute("class", "col-xs-12 col-sm-8");
	//blogContent.setAttribute("class", "c2");
	const blogTitle = document.createElement("h3");
	blogTitle.textContent = object[2];
	const blogParagraph = document.createElement("p");
	blogParagraph.textContent = allparagraphs;
	blogContent.appendChild(blogTitle);
	blogContent.appendChild(blogParagraph);
	blog.appendChild(blogImage);
	blog.appendChild(blogContent);
	blogs.appendChild(blog);
}

document.body.insertBefore(blogs, foot);

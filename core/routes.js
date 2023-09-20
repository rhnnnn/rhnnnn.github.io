const pageName = "rhnnnn.github.io";

const route = {
	404: {
		template: "/pages/error/404.html",
		title: "404 Not Found | " + pageName,
	},
	"/": {
		template: "/pages/index.html",
		title: "Home | " + pageName,
	},
	"/about": {
		template: "/pages/about.html",
		title: "About Us | " + pageName,
	},
};
export default route
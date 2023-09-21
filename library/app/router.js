import route from "../../core/routes.js";

// calling route list from routes.js
const routeList = route

// watch navbar click only
document.addEventListener("click",(e)=>{
	const {target}=e
	if (!target.matches("nav nav ul li a")) {
		return
	}
	e.preventDefault()
	routeUrl()
})

const routeUrl=(event)=>{
	event=event||window.event
	event.preventDefault()
	window.history.pushState({},"",event.target.href)
	handlerUrlLocation()
}

const handlerUrlLocation=async()=>{
	const location=window.location.pathname

	if (location.length==0) {
		location="/"
	}

	// active nav 
	const activeNav=document.querySelectorAll("nav nav ul li a")

	activeNav.forEach((link)=>{
		if (link.getAttribute("href")===location) {
			link.classList.add("link-active")
		} else {
			link.classList.remove("link-active")
		}
	})
	// active nav end

	const router=routeList[location]||routeList[404]

	const pageTitle=router.title+" | "+window.location.host

	const html=await fetch(router.view+".html").then((response)=>response.text())

	document.getElementById("content").innerHTML=html

	document.title=pageTitle
}

window.onpopstate=handlerUrlLocation

window.route=routeUrl
handlerUrlLocation()
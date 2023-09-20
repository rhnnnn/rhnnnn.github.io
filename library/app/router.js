import route from "../../core/routes.js"

// only watch navbar click only
document.addEventListener("click",(e)=>{
	const {target}=e
	if (!target.matches("nav nav ul li a")) {
		return
	}
	e.preventDefault()
	routeUrl()
})

// calling route list from routes.js
const routes = route


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

	const router=routes[location]||routes[404]

	const html=await fetch(router.template).then((response)=>response.text())

	document.getElementById("content").innerHTML=html

	document.title=router.title
}

window.onpopstate=handlerUrlLocation

window.route=routeUrl
handlerUrlLocation()
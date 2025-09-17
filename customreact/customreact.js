function createRElement(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])    
    }
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        type:'_blank'
    },
    children:'click me to visit google'

}

const createre=document.getElementById('root')
createRElement(reactElement,createre)

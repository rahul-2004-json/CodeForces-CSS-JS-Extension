const site=window.location.hostname
// alert("Injector- JS and CSS has been inserted "+site)


//Custom CSS - Function
Add_Custom_Style =css =>document.head.appendChild(document.createElement("style")).innerHTML= css
//create custom element-function
function Create_Custom_Element(tag,attr_tag,attr_name,value) {
    const custom_element=document.createElement(tag)
    custom_element.setAttribute(attr_tag,attr_name)
    custom_element.innerHTML=value
    document.body.append(custom_element)
}


//JS code for youtube
if(site.includes("codeforces.com")){
   Add_Custom_Style(
    ` @import url('https://fonts.googleapis.com/css2?family=Kurale&display=swap');

    * {
        font-family: "Kurale" !important;
        color: #ff0000 !important;
    }

    ytd-channel-about-metadata-renderer {
        zoom: 1.6;
    }

    #meta.ytd-c4-tabbed-header-renderer {
        zoom: 1.3;
    }

    #js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #ff0037 !important;
        background-color:#000000;
        position: fixed;
        top: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }

    .js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #008dff !important;
        background-color: #000000;
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }


    `
   )

//--> For creating custom elements
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )
}

//JS code for google
if(site.includes("google.com")){
    alert("for google!")
}

//JS code for microsoft
if(site.includes("microsoft.com")){
    alert("for microsoft!")
}
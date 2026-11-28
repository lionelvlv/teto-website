var iconContainer = document.getElementsByClassName("iconContainer")[0];

const WINDOWOFFSET = 100;
const ICONSIZE = 100;
const MAXVERTICALOFFSET = 1080 - 300;
var horizontaloffset = 0
var verticaloffset = 0;

const icons = [
    { 
        name: 'pears',
        image: "assets/icon64x64.png",
        id: 'pear-box',
        width: 500,
        height: 500,
    },
    {
        name: 'player',
        image: "assets/playericon.png",
        id: 'player', 
        width: 500,
        height: 500,
    },
    {
        name: 'paint',
        id: 'paint',
        width: 500,
        height: 500,
        image: "assets/painticon.png",
    },
    {
        name: 'wordle',
        id: 'wordle',
        width: 212.5,
        height: 300,
        image: "assets/wordleicon.png", 
    },
    {
        name: 'terminal',
        id: 'terminal2',
        width: 700,
        height: 382,
        image: "assets/terminalicon.png",
    },
    {
        name: 'notes',
        id: 'notes',
        width: 700,
        height: 382,
        image: "assets/notesicon.png",
    },
    {
        name: 'tetocraft',
        id: 'tetocraft',
        width: 500,
        height: 500,
        image: "assets/tetocrafticon.png", 
    },
    {
        name: 'file explorer',
        id: 'file-explorer',
        width: 500,
        height: 500,
        image: "assets/icon.png",
    }
] 

for (let elem of icons) {
    let icon = document.createElement("div");
    icon.className = "icon selectable";
    let imgElem = document.createElement("img");
    imgElem.src = elem.image;
    
    imgElem.setAttribute("draggable", true);
    let spanElem = document.createElement("span");
    spanElem.innerHTML = elem.name;

    icon.style.top = verticaloffset + "px";
    icon.style.left = horizontaloffset + "px";

    // icon.setAttribute("draggable", true);
    icon.ondblclick = function() {makeWidget(elem.id, elem.name, elem.width, elem.height, WINDOWOFFSET, WINDOWOFFSET)};
    icon.addEventListener("mousedown", (event) => dragMouseDown(event, icon));
    icon.style.setProperty("position", "absolute");
    verticaloffset += ICONSIZE;
    if (verticaloffset > MAXVERTICALOFFSET) {
        verticaloffset = 0;
        horizontaloffset += ICONSIZE;
    }
    icon.appendChild(imgElem);
    icon.appendChild(spanElem);
    iconContainer.appendChild(icon);
}

// Source - https://stackoverflow.com/a/6593467
// Posted by fulmicoton, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-25, License - CC BY-SA 3.0
function snapToGrid(val,gridSize) {
    var snap_candidate = gridSize * Math.floor(val/gridSize);
    return snap_candidate;
    // if (Math.abs(val - snap_candidate) < 64) {
    //     return snap_candidate;
    // }
    // else {
    //     return null;
    // }
}

icon_onmouseup = null;
icon_onmousemove = null;
let currImage = null;
let currSpan = null;
let currDiv = null;

function dragMouseDown(e, icon) {
    e.preventDefault();
    // get the mouse cursor position at startup:
   icon_onmouseup = elementTeleport;
    // call a function whenever the cursor moves:
   icon_onmousemove = elementDrag;
    // where mouse is currently is when first clicked
    let startX = e.clientX;
    let startY = e.clientY;
    function elementDrag(e) {
        if (currSpan == null) {
            let refSpan = icon.children[1];
            currSpan = document.createElement("span");
            currSpan.innerHTML = refSpan.innerHTML;
        }
        if (currImage == null) {
            let refImage = icon.children[0];
            currImage = document.createElement("img");
            currImage.src = refImage.src;
        }
        if (currDiv == null) {
            currDiv = document.createElement("div");
            currDiv.appendChild(currImage);
            currDiv.appendChild(currSpan);
            currDiv.style = "display: flex; flex-direction: column;"
            icon.appendChild(currDiv);
            currDiv.style.position = 'absolute';
            currDiv.style.opacity = 0.5;
        }
        // start pos - new current positions
        // distance between both
        let newX = startX - e.clientX;
        let newY = startY - e.clientY;

        // reset start pos for next move (where mouse is currently at)
        startX = e.clientX;
        startY = e.clientY;
        // console.log(startX, startY, newX, newY);

        // offsetTop, offsetLeft top, left pos relative to parent
        currDiv.style.top = currDiv.offsetTop - newY + 'px';
        currDiv.style.left = currDiv.offsetLeft - newX + 'px';
    }

    function elementTeleport(e) {
        e.preventDefault();
        icon.style.position = 'absolute';
        icon.style.top = snapToGrid(Math.max(Math.min(e.clientY, 730), 0), ICONSIZE) + 'px';
        icon.style.left = snapToGrid(Math.max(Math.min(e.clientX, 1800), 0), ICONSIZE) + 'px';
        icon_onmouseup = null;
        icon_onmousemove = null;
        icon.removeChild(currDiv);
        currDiv = null;
        currImage = null;
        currSpan = null;
    }
}


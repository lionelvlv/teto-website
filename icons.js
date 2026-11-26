var iconContainer = document.getElementsByClassName("iconContainer")[0].children;

for (let icon of iconContainer) {
    icon.addEventListener("mousedown", (event) => dragMouseDown(event, icon));
    icon.style.setProperty("position", "absolute");
    icon.setAttribute("draggable", true);
    console.log(icon);
}

// Source - https://stackoverflow.com/a/6593467
// Posted by fulmicoton, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-25, License - CC BY-SA 3.0
function snapToGrip(val,gridSize) {
    var snap_candidate = gridSize * Math.floor(val/gridSize);
    if (val - snap_candidate < 2) {
        return snap_candidate;
    }
    else {
        return null;
    }
}


function dragMouseDown(e, icon) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

    function elementDrag(e) {
        e.preventDefault();
        icon.style.position = 'absolute';
        icon.style.top = e.clientY + 'px';
        icon.style.left = e.clientX + 'px';
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


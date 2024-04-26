// import { drawWindow } from "./drawWindow";

function calculateCurvature(anchoInput, altoInput, flechaInput, containerId, tipoInput) {
    if (!anchoInput || !altoInput || !flechaInput) {
        console.error("Alguno de los inputs no existe en el DOM.");
        return;
    }

    const base = parseFloat(anchoInput.value / 10);
    const height = parseFloat(altoInput.value / 10);
    const maxHeight = parseFloat(flechaInput.value / 10);
    const profileThickness = 4.4;

    const arrowHeight = maxHeight;
    const curvatureRadius = (base ** 2) / (8 * arrowHeight) + arrowHeight / 2;
    const ajustedBase = base - 2 * profileThickness;
    const angleInRadians = 2 * Math.asin(arrowHeight / (2 * curvatureRadius));
    const angleInDegrees = ((180 / Math.PI) * angleInRadians) + 90;

    drawWindow(containerId, base, height, arrowHeight, curvatureRadius, profileThickness, profileThickness / 2, arrowHeight + profileThickness / 2, base - profileThickness / 2, arrowHeight + height + profileThickness / 2, tipoInput);
}

function drawWindow(containerId, base, height, arrowHeight, curvatureRadius, profileThickness, startX, startY, endX, endY, tipoInput) {
    const windowDrawingElement = document.getElementById(containerId);
    windowDrawingElement.innerHTML = '';

    let curveTotalHeight = height + arrowHeight;

    if (tipoInput === "Ojo de buey") {
        curveTotalHeight = base;
    }

    const containerDiv = document.createElement('div');
    containerDiv.style.position = 'relative';
    containerDiv.style.height = curveTotalHeight + 'px';

    const svgNS = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNS, 'svg');
    svgElement.setAttribute('width', base + profileThickness + 'px');
    svgElement.setAttribute('height', curveTotalHeight + profileThickness + 'px');

    svgElement.style.display = 'flex';
    svgElement.style.alignItems = 'center';

    if (tipoInput === "Ojo de buey") {
        const circle = document.createElementNS(svgNS, 'circle');
        const diameter = base - profileThickness; 
        const radius = diameter / 2;
        const centerX = base / 2;
        const centerY = curveTotalHeight / 2;
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('stroke-width', profileThickness);
        svgElement.appendChild(circle);
    } else {
        const curvePath = document.createElementNS(svgNS, 'path');
        const curveD = `
            M${startX} ${startY}
            A${curvatureRadius},${curvatureRadius} 0 0 1 ${endX} ${startY}
        `;
        curvePath.setAttribute('d', curveD);
        curvePath.setAttribute('fill', 'none');
        curvePath.setAttribute('stroke', 'black');
        curvePath.setAttribute('stroke-width', profileThickness);

        const sideRect1 = document.createElementNS(svgNS, 'rect');
        sideRect1.setAttribute('x', 0);
        sideRect1.setAttribute('y', arrowHeight + profileThickness / 4);
        sideRect1.setAttribute('width', profileThickness);
        sideRect1.setAttribute('height', height);
        sideRect1.setAttribute('fill', 'black');

        const sideRect2 = document.createElementNS(svgNS, 'rect');
        sideRect2.setAttribute('x', base - profileThickness);
        sideRect2.setAttribute('y', arrowHeight + profileThickness / 4);
        sideRect2.setAttribute('width', profileThickness);
        sideRect2.setAttribute('height', height);
        sideRect2.setAttribute('fill', 'black');

        const basePath = document.createElementNS(svgNS, 'path');
        const baseD = `
            M${profileThickness} ${curveTotalHeight - profileThickness}
            L${base - profileThickness} ${curveTotalHeight - profileThickness}
            L${base} ${curveTotalHeight}
            L0 ${curveTotalHeight}
            Z
        `;
        basePath.setAttribute('d', baseD);
        basePath.setAttribute('fill', 'black');

        if (tipoInput === "Capilla") {
            svgElement.appendChild(sideRect1);
            svgElement.appendChild(sideRect2);
        }

        svgElement.appendChild(curvePath);

        if (tipoInput === "Curva con base" || tipoInput === "Capilla") {
            svgElement.appendChild(basePath);
        }
    }

    containerDiv.appendChild(svgElement);
    windowDrawingElement.appendChild(containerDiv);
}


export default calculateCurvature;
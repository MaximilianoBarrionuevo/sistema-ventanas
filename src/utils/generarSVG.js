import Ventana from "./Ventana";

export function generarSVG(anchoInput, altoInput, flechaInput, tipoInput) {

    // Convertir valores de entrada a números
    const base = parseFloat(anchoInput);
    const height = parseFloat(altoInput);
    const maxHeight = parseFloat(flechaInput);
    const profileThickness = 2;

    const arrowHeight = maxHeight;
    const curvatureRadius = (base ** 2) / (8 * arrowHeight) + arrowHeight / 2;
    const adjustedBase = base - 2 * profileThickness;

    // Calcula la longitud del arco sin curvar
    const uncurvedArcLength = Math.sqrt(Math.pow(adjustedBase, 2) + Math.pow(arrowHeight, 2));

    // Calcula el ángulo en radianes
    const angleInRadians = 2 * Math.asin(arrowHeight / (2 * curvatureRadius));

    // Convierte el ángulo a grados
    const angleInDegrees = (180 / Math.PI) * angleInRadians;

    const svgNS = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNS, 'svg');
    svgElement.setAttribute('xmlns', svgNS);
    svgElement.setAttribute('width', base + 'px');
    if(tipoInput === "Ojo de buey") {
        svgElement.setAttribute('height', (base + profileThickness) + 'px');
    } else {
        svgElement.setAttribute('height', (height + arrowHeight + profileThickness) + 'px');
    }
    svgElement.style.display = 'flex';
    svgElement.style.alignItems = 'center';

    if (tipoInput === "Ojo de buey") {
        const circle = document.createElementNS(svgNS, 'circle');
        const diameter = base - profileThickness;
        const radius = diameter / 2;
        const centerX = base / 2;
        const centerY = base / 2;
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
        M${profileThickness / 2} ${arrowHeight + profileThickness / 2}
        A${curvatureRadius},${curvatureRadius} 0 0 1 ${base - profileThickness / 2} ${arrowHeight + profileThickness / 2}
    `;
        curvePath.setAttribute('d', curveD);
        curvePath.setAttribute('fill', 'none');
        curvePath.setAttribute('stroke', 'black');
        curvePath.setAttribute('stroke-width', profileThickness);

        const sideRect1 = document.createElementNS(svgNS, 'rect');
        sideRect1.setAttribute('x', 0);
        sideRect1.setAttribute('y', arrowHeight);
        sideRect1.setAttribute('width', profileThickness);
        sideRect1.setAttribute('height', height);
        sideRect1.setAttribute('fill', 'black');

        const sideRect2 = document.createElementNS(svgNS, 'rect');
        sideRect2.setAttribute('x', base - profileThickness);
        sideRect2.setAttribute('y', arrowHeight);
        sideRect2.setAttribute('width', profileThickness);
        sideRect2.setAttribute('height', height);
        sideRect2.setAttribute('fill', 'black');

        const basePath = document.createElementNS(svgNS, 'path');
        const baseD = `
        M${profileThickness} ${height + arrowHeight}
        L${base - profileThickness} ${height + arrowHeight}
        L${base} ${height + arrowHeight + profileThickness}
        L0 ${height + arrowHeight + profileThickness}
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

    const svgString = new XMLSerializer().serializeToString(svgElement);
    return svgString;
}

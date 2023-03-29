class angledUnderlineFill{
  static get inputProperties() {
    return [
      "--lines-width",
      "--lines-fill-color",
      "--lines-fill-height",
      "--lines-border-color",
      "--lines-angle",
    ];
  }
  paint(ctx, size, props) {
    //Props
    const linesWidth = parseFloat(props.get("--lines-width")) || 3;
    const linesFillColor =  String(props.get("--lines-fill-color")) || 'white';
    const linesFillHeight =  parseFloat(props.get("--lines-fill-height")) || 10;
    const linesBorderColor =  String(props.get("--lines-border-color")) || 'black';
    const linesAngle =  parseFloat(props.get("--lines-angle")) || 20;

    //Auxiliary calculations
    const yBase = size.height;
    const yBase2 = size.height - linesWidth;
    const yBase3 = size.height - linesFillHeight;
    
    //Fill
    ctx.beginPath()
    const catetoAdjFill = Math.tan(linesAngle*Math.PI/180 )*props.get("--lines-fill-height");
    ctx.strokeStyle = linesFillColor;
    ctx.fillStyle = linesFillColor;
    ctx.moveTo(0,yBase);
    ctx.lineTo(size.width,yBase)
    ctx.lineTo(size.width-catetoAdjFill,yBase3)
    ctx.lineTo(size.width-catetoAdjFill-linesWidth,yBase3)
    ctx.lineTo(0,yBase3)
    ctx.closePath();
    ctx.fill()

    //Line
    const catetoAdjLinea = Math.tan(linesAngle*Math.PI/180 )*yBase2;
    const catetoAdjLineaBajo = Math.tan(linesAngle*Math.PI/180 )*linesWidth;
    ctx.beginPath();
    ctx.strokeStyle = linesBorderColor;
    ctx.fillStyle = linesBorderColor;
    ctx.lineWidth= 1;
    ctx.moveTo(0,yBase);
    ctx.lineTo(size.width,yBase)
    ctx.lineTo(size.width-catetoAdjLinea,0)
    ctx.lineTo(size.width-catetoAdjLinea-linesWidth+1,0)
    ctx.lineTo(size.width-linesWidth-catetoAdjLineaBajo,yBase2)
    ctx.lineTo(0,yBase2)
    ctx.closePath();
    ctx.fill()
  }
}

registerPaint(
  "angled-underline-fill",
  angledUnderlineFill
);
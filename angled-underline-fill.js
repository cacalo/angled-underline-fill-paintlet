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
    console.log("ctx",ctx,"TAMAÑO",size,"Props",props);

    //Auxiliary calculations
    const yBase = size.height;
    const yBase2 = size.height - props.get("--lines-width");
    const yBase3 = size.height - props.get("--lines-fill-height");
    
    //Fill
    ctx.beginPath()
    const catetoAdjFill = Math.tan(props.get("--lines-angle")*Math.PI/180 )*props.get("--lines-fill-height");
    ctx.strokeStyle = "--lines-fill-color";
    ctx.fillStyle = props.get("--lines-fill-color");
    console.log(props.get("--lines-width"))
    ctx.moveTo(0,yBase);
    ctx.lineTo(size.width,yBase)
    ctx.lineTo(size.width-catetoAdjFill,yBase3)
    ctx.lineTo(size.width-catetoAdjFill-props.get("--lines-width"),yBase3)
    ctx.lineTo(0,yBase3)
    ctx.closePath();
    ctx.fill()

    //Line
    const catetoAdjLinea = Math.tan(props.get("--lines-angle")*Math.PI/180 )*yBase2;
    const catetoAdjLineaBajo = Math.tan(props.get("--lines-angle")*Math.PI/180 )*props.get("--lines-width");
    ctx.beginPath();
    ctx.strokeStyle = props.get("--lines-border-color");
    ctx.fillStyle = props.get("--lines-border-color");
    ctx.lineWidth= 1;
    ctx.moveTo(0,yBase);
    ctx.lineTo(size.width,yBase)
    ctx.lineTo(size.width-catetoAdjLinea,0)
    ctx.lineTo(size.width-catetoAdjLinea-props.get("--lines-width")+1,0)
    ctx.lineTo(size.width-props.get("--lines-width")-catetoAdjLineaBajo,yBase2)
    ctx.lineTo(0,yBase2)
    ctx.closePath();
    ctx.fill()
  }
}

registerPaint(
  "angled-underline-fill",
  angledUnderlineFill
);
class Gift{
  constructor(x,z){
    this.x = x;
    this.dx = rnd(-10,10) / 100 ;
    this.z = z;
    this.dz = rnd(-10,10) / 100;

     this.obj = document.createElement("a-entity");
    /* Challenge 
       Create an appropriate object to represent a gift.  Feel free to replace the above statement with a clone if you want.
    */
     this.obj = document.createElement("a-box");
     this.obj.setAttribute("opacity", 0);
     let box = document.createElement("a-box");
     box.setAttribute("width", 1);
     box.setAttribute("depth",1);
     box.setAttribute("height", 1);
     box.setAttribute("color", "red");
     box.setAttribute("src", "#gift_pattern");
     this.obj.append(box);
    /* Challenge
       An attribute has been identified for the raycaster in the cursor. 
       Add the appropriate attribute in order to interact with this object.
    */
     this.obj.setAttribute("clickable", "");
    /* Challenge 
       Stop the gift from moving when the user clicks on it.
       Hint: Don't forget to adjust roam() to incorporate the flag
    */
     this.obj.stop = false;
     this.obj.addEventListener("click", ()=> {
        this.obj.stop = true;
     });
    this.obj.setAttribute("position",{x:this.x, y:0.25, z:this.z});
    scene.append(this.obj);
  }
  roam(){
    /* Challenge
       Create an altering animation for movement on the z axis. Keep the gift 
       between the z values of -20 and 20
    */

    /* Challenge
       Create an altering animation for movement on the x axis. Keep the gift 
       between the x values of -20 and 20
    */
     if (!this.obj.stop) {
        this.x += this.dx;
        if(this.x > 20 || this.x < -20) this.dx = -this.dx;
        this.z += this.dz;
        if(this.z > 20 || this.z < -20) this.dz = -this.dz;
        this.obj.setAttribute("position",{x:this.x, y:0.25, z:this.z});
     }

 
     // this.obj.setAttribute("position",{x:this.x, y:0.25, z:this.z}); 
    
  }
}
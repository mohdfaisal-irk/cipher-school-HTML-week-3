const pencilbox={
    name: "Alishan",
    size: 30,
    color:ReadableByteStreamController,
    ziplength:{
        left:12,
        right:12,
        top:24,
    },
    zipOpen:false,
    toogleZip:function(zipStatus){
        this.zipOpen=zipStatus;
    },
};

console.log(pencilbox);
console.log(pencilbox.color);
console.log(pencilbox.ziplength.left);

console.log(pencilbox.toogleZip(true));
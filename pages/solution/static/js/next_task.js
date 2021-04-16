

let videos = { //put task according to type video-> 1:task 1, 2: task 2, 3: task 3
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587350/A1A_urprxg.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587598/A1B_yajuiy.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587435/A1C_zrlmmg.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587536/A2A_ckkafj.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587595/A2B_xbuhmm.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587502/A2C_xiv9nm.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587538/A3A_ehycvo.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587603/A3B_hgfxgi.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587313/A3C_kcarvd.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587126/I1A_ga3xdd.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587157/I1B_yoepbt.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586683/I1C_tccwad.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586727/I2A_axojij.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587023/I2B_bcysmr.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586697/I2C_xuxhl1.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586690/I3A_oyini7.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587058/I3B_zslmam.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586887/I3C_kog7ib.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586824/T1A_ottnj2.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586956/T1B_odsqvg.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586844/T1C_z46z3i.mp4': 1,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586900/T2A_h689cg.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587039/T2B_fwsqi9.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587075/T2C_csokut.mp4': 2,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618586950/T3A_tjsrpv.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587088/T3B_hqoutg.mp4': 3,
    'https://res.cloudinary.com/dn5phzedc/video/upload/v1618587079/T3C_a8abyq.mp4': 3
    //27 videos of 3 tasks
}
debugger


let index = window.location.pathname.replace("/solution/pre/","");
console.log("index2",index);
index = parseInt(index);
let user_data = JSON.parse(localStorage.getItem("user_data"));
let video_url = user_data["videos"][index];
let solution = videos[video_url];

window.location.href = "/solution/" + index + "/" + solution;
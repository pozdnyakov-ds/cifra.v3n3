export default() => {
    // const io = require("socket.io")(3001, {
    //     cors: {     // No CORS at all
    //         origin: '*',
    //     }
    // });
    
    // var i = 0;
    // // Broadcast "tick" event every second
    // setInterval(() => {
    //     i++;
    //     io.emit("tick", i);
    // }, 1000);

    return JSON.stringify({
        user: {name: 'Dmitry', email: '2903015@gmail.com'},
        // order: {id: 555, desc: 'Description...'}
    })
}
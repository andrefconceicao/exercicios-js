function bhaskara(ax2, bx, c) {
    let delta = bx**2 - (4 * ax2 * c)

    if (delta < 0) {
        return 'Delta é negativo.'
    }
    else {
        let x = [0,0]
        if(delta == 0){
            return x
        }
        else {
            x[0] = (bx*(-1) + Math.sqrt(delta))/(2*ax2)
            x[1] = (bx*(-1) - Math.sqrt(delta))/(2*ax2)

            return x
        }
    }
}

console.log(bhaskara(1, -2, -3));
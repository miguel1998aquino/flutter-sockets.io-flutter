class Bands{
    constructor(){
        this.bands = [];
    }

    addBand(band){
        this.bands.push(band);
    }

    getBands(){
        return this.bands;
    }

    // getBand(id){
    //     return this.bands.find(band => band.id === id);
    // }

    // updateBand(id, band){
    //     const index = this.bands.findIndex(b => b.id === id);
    //     this.bands[index] = band;
    // }

    deleteBand(id=''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteBand(id =''){
        this.bands= this.bands.map(band => {
            if(band.id === id){
                band.votes ++;
                return band;
            }else{
                return band;
            }
        })
    }
}

module.exports = Bands;
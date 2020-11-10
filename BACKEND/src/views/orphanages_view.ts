import Orphanage from '../models/Orphanage';
import imagesView from './images_view';



export default{
    render(orphanage: Orphanage) {
        return{ 
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            weekends_open: orphanage.weekends_open,
            images: imagesView.renderMany(orphanage.images)
        }

    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
};
import React from 'react';
import {Dinosaur} from './Dinosaur';
import {dinosaurAPI} from '../rest/DinosaurAPI.js';

export class DinosaursList extends React.Component {
    state = {
        dinosaurs: []
    };

    componentDidMount() {
        this.fetchDinosaurs();
    }

    fetchDinosaurs = async () => {
        const dinosaurs = await dinosaurAPI.get();
        this.setState({dinosaurs});
    };

    updateDinosaur = async (updateDinosaur) => {
        await dinosaurAPI.put(updateDinosaur);
        this.fetchDinosaurs();
    };

    render() {
        return (
            <div className="dinosaur-list">
                {this.state.dinosaurs.map((dinosaur) => (
                    <Dinosaur
                        dinosaur={dinosaur}
                        key={dinosaur._id}
                        updateDinosaur={this.updateDinosaur}
                    />
                ))}
            </div>
        )
    }

}
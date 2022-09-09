import React from 'react';
import {NewFeatureForm} from './NewFeatureForm';

export const Dinosaur = (props) => {
    const {dinosaur, updateDinosaur} = props;

    const deleteFeature = (featureID) => {
        const updateDinosaur = {
            ...dinosaur,
            features: dinosaur.features.filter((x) => x._id !== featureID)
        };
        updateDinosaur(updateDinosaur);
    };

    const addNewFeature = (feature) => updateDinosaur({...dinosaur, features: [...dinosaur.features, feature]});

    const features = () => (
        <ul>
            {dinosaur.features.map((feature, index) => (
                <li key={index}>
                    <b>Body Part: </b>{`${feature.part}     `}<b>Color:</b>{`${feature.color}     `}
                    <button className="btn btn-danger featureDeleteButton" onClick={(e) => deleteFeature(feature._id)}>Delete Feature</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="card p-4 m-2" key={dinosaur._id}>
            <div className="card-header">
                <h3>{dinosaur.name}</h3>
                <button className="btn btn-danger deleteDinosaurButton">Delete Dinosaur(NOT IMPLEMENTED)</button>
            </div>
            <ul className="list-group list-group-flush dinoInfo">
                <li className="list-group-item"><b>Size: </b>{`${dinosaur.size}`}</li>
                <li className="list-group-item"><b>Diet: </b>{`${dinosaur.diet}`}</li>
                <li className="list-group-item"><b>Environment: </b>{`${dinosaur.environment}`}</li>
            </ul>
            {features({features, dinosaurID: dinosaur._id, deleteFeature})}
            <NewFeatureForm addNewFeature={addNewFeature} />
        </div>
    )
};
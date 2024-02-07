const Simpson = ({simpson}) => {
    const {name, surname, image, info, photo} = simpson;

    return (
        <div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>image: {image}</div>
            <div>info: {info}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};
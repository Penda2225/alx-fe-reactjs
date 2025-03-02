const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{props.name}</h2>
            <p style={{ fontSize: '18px', color: '#333' }}>
                Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
            </p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</p>
        </div>
    );
};

export default UserProfile;

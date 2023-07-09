
const Header = (props) => {
    const { title } = props;
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
        </div>
    );
};

export default Header;
const App = (props) => {
    const { initialButtonText, initalClassName } = props;
    let [buttonText, setButtonText] = React.useState(initialButtonText);
    let [classText, setClassText] = React.useState(initalClassName);

    const onButtonClick = () => {
        setButtonText("Hello from React");
        setClassText('green-btn ');
    };
    return (
        <div className="app">
            <button className={classText} onClick={onButtonClick}>{buttonText}</button>
        </div>
    );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me please" initalClassName="" />);

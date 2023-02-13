interface ContentProps {
    title: string;
    detail: string;
}

const TodaysContent: React.FC<ContentProps> = ({ title, detail }) => {
    return (
        <>
            <h4>{title}</h4>
            <p>{detail}</p>
        </>
    );
};

export default TodaysContent;

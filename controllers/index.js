
const sendIndex = (req, res, next) => {
    //#swagger.tags=['Welcome to FootBall Scouts API']
    res.send(`
        <section>
            <div>
                <h1>Welcome to FootBall Scouts API</h1>
            </div>

            <div>
                <h2>Use one of this links bellow to see some of our API</h2>
            </div>
            
            <div>
                <ul>
                    <li><a href="#">1</li>
                    <li><a href="#">2</li>
                    <li><a href="#">3</li>
                    <li><a href="#">4</li>
                </ul>
            <div>
        </section>
    `)
};

module.exports = {
    sendIndex
}
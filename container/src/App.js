import React, { Suspense } from 'react';

const Front1 = React.lazy(() => import('microFrontEnd1/MicroFrontEnd1Index'))
const Front2 = React.lazy(() => import('microFrontEnd2/MicroFrontEnd2Index'))

function App() {
    return (
        <div>
            <h1>Header</h1>
            <Suspense fallback="Loading Front1...">
                <Front1/>
            </Suspense>
            <p> ------------------- </p>
            <Suspense fallback="Loading Front2...">
                <Front2/>
            </Suspense>
        </div>
    );
}


export default App;
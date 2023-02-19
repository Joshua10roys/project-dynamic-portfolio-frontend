import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, layouts, plugins, scales } from "chart.js/auto";


export default function Skill({ data }) {

    let lables = [];
    let datas = [];
    let colors = [];

    data.map(e => {
        if (e.enabled) {
            lables.push(e.name);
            datas.push(e.value);
            colors.push(e.color);
        }
    })

    return (
        <>
            <div id="skills" className="m-0 p-3 p-md-5 mx-auto">

                <div className="container">

                    <h1 className="text-center">Skill</h1>
                    <hr />

                    <div className="mx-auto shadow m-5 w-md-75">
                        <Bar
                            id="chart"
                            data={{
                                labels: lables,
                                datasets: [{
                                    data: datas,
                                    backgroundColor: colors,
                                    color: "#000000"
                                }],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false
                                    }
                                },
                                scales: {
                                    x: {
                                        grid: {
                                            display: false,
                                        },
                                    },
                                    y: {
                                        ticks: {
                                            display: false,
                                        },
                                        max: "100",
                                        grid: {
                                            display: false,
                                        }
                                    }
                                }
                            }}
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
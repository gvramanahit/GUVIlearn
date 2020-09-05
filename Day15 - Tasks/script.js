var dispComp = document.createElement('div');
        dispComp.setAttribute('id','div1');
        dispComp.setAttribute('class','div1')
        document.body.append(dispComp);

        setTimeout(() => {
            document.getElementById('div1').innerText = '10..';
            setTimeout(() => {
                document.getElementById('div1').innerText = '9..';
                setTimeout(() => {
                    document.getElementById('div1').innerText = '8..';
                    setTimeout(() => {
                        document.getElementById('div1').innerText = '7..';
                        setTimeout(() => {
                            document.getElementById('div1').innerText = '6..';
                            setTimeout(() => {
                                document.getElementById('div1').innerText = '5..';
                                setTimeout(() => {
                                    document.getElementById('div1').innerText = '4..';
                                    setTimeout(() => {
                                        document.getElementById('div1').innerText = '3..';
                                        setTimeout(() => {
                                            document.getElementById('div1').innerText = '2..';
                                            setTimeout(() => {
                                                document.getElementById('div1').innerText = '1..';
                                                setTimeout(() => {
                                                    document.getElementById('div1').innerText = "Happy Teacher's day!";
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
const data = [
    {
        title: 'Send leads documents for inpection',
        deadline: 'July-1-2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 1
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June-2-2001',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 2
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'April-22-2012',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 3
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'May-5-2024',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 4
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June-22-2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 5
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June-22 2022',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 5
        }
    },
]


let cont = document.querySelector('.container')


for (let item of data) {
    /// a 
    let block = document.createElement('div')
    let left_bl = document.createElement('div')
    let right_bl = document.createElement('div')
    let blok = document.createElement('div')
    let bl_centre_left = document.createElement('div')
    let bl_centre_right = document.createElement('div')
    let bottom_bl = document.createElement('div')
    let bott_l = document.createElement('div')
    let bott = document.createElement('div')
    let bott_r = document.createElement('div')
    let bott_l2 = document.createElement('div')
    let bottt_id = document.createElement('div')


    let inp_n = document.createElement('div')
    let inp_n2 = document.createElement('div')
    let bbt = document.createElement('button')

    //// b

    block.classList.add('block')
    left_bl.classList.add('left_bl')
    right_bl.classList.add('right_bl')
    blok.classList.add('blok')
    left_bl.innerHTML = item.title
    bl_centre_left.classList.add('bl_centre_left')
    bl_centre_right.classList.add('bl_centre_right')
    bottom_bl.classList.add('bottom_bl')
    bl_centre_left.innerHTML = 'Deadline:'
    bl_centre_right.innerHTML = item.deadline



    bott_l.classList.add('bott_l')
    bott.classList.add('bott')
    bott_r.classList.add('bott_r')
    bott_l2.classList.add('bott_l2')
    bottt_id.classList.add('bottt_id')

    // bott_l.backroundImage = src="./img/1.png"
    bottt_id.innerHTML = 'ID:'
    bott_l2.innerHTML = item.author.id
    bott_r.innerHTML = item.deadline


    inp_n.classList.add('inp_n')
    inp_n2.classList.add('inp_n2')
    bbt.classList.add('bbt')
    bbt.innerHTML = 'X'
    inp_n.innerHTML = 'delete'
    inp_n2.innerHTML = 'izmeneniye '


    //// c

    bott.append(bott_l, bottt_id, bott_l2, bott_r)
    blok.append(left_bl, right_bl)
    bottom_bl.append(bl_centre_left, bl_centre_right)
    block.append(blok, bottom_bl, bott, inp_n, inp_n2, bbt)
    cont.append(block)




    // span.onclick = () => {
    //     item.isDone = !item.isDone

    //     console.log(reload(todos));
    // }





    right_bl.onclick = () => {
   
        inp_n.style.display = 'block'
        inp_n2.style.display = 'block'
        bbt.style.display = 'block'
      
        
     
    }


    bbt.onclick = () => {

        // item.task = inp_n.value
        // item.yearr = inp_n2.value
        inp_n.style.opacity = '0'
        inp_n2.style.opacity = '0'
        bbt.style.opacity = '0'
        setTimeout(() => {
            img.style.opacity = '1'
            changeBtn.style.opacity = '1'
        }, 100);

    }

    inp_n2.onclick = ()  => {
        alert('sdfdsfsd')
    
            block.remove()
      

    }


}
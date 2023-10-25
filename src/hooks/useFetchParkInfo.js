function useFetchParkInfo( options = {} ) {
    const { isAttraction = null, name = null } = options;

    const parkInfo = [
        {
            id: 0,
            name: 'Entrance',
            desc: 'Welcome to Four Flags, the most enchanting amusement park in the world! At our entrance, you\'ll be greeted with open arms and the promise of unforgettable adventures. As you stroll over to our Tickets booth, you\'ll be enchanted by the anticipation of thrilling experiences. Our pristine Toilets are designed with your comfort and convenience in mind, catering to both kids and adults, ensuring a pleasant visit for all.',
            offsetDistance: '0%',
            isAttraction: false,
            svg: 'logo.svg'
        },
        {
            id: 1,
            name: 'Tickets',
            desc: 'Here you can buy tickets, and your journey to a world of fun and excitement begins. The adventure awaits, and the magic of Four Flags is just a ticket away!',
            offsetDistance: '18%',
            isAttraction: false,
            svg: 'ticket.svg'
        },
        {
            id: 2,
            name: 'Toilets',
            desc: 'Our gender-neutral toilets are not just about accessibility and cleanliness; they are a sanctuary of comfort for kids and adults alike. Feel refreshed and rejuvenated as you continue your thrilling adventure at Four Flags, knowing that everyone is welcome and catered to.',
            offsetDistance: '22%',
            isAttraction: false,
            svg: 'toilet.svg'
        },
        {
            id: 3,
            name: 'Bunny Jump',
            desc: 'For kids, a carousel that jumps up and down, filling the air with laughter and excitement. At Four Flags, the Bunny Jump promises endless joy for the little ones!',
            offsetDistance: '33%',
            isAttraction: true,
            svg: null
        },
        {
            id: 4,
            name: "Cherry's Cars",
            desc: 'A whimsical take on the classic radio cars carousel, Cherry\'s Cars offer a delightful twist that keeps riders of all ages entertained and smiling. At Four Flags, the fun never ends!',
            offsetDistance: '36%',
            isAttraction: true,
            svg: null
        },
        {
            id: 5,
            name: "Grandma's",
            desc: 'Indulge your taste buds at Grandma\'s, where the world\'s most delicious ice cream awaits. A treat for your senses, it\'s a must-visit destination at Four Flags!',
            offsetDistance: '42%',
            isAttraction: false,
            svg: 'grandmas.svg'
        },
        {
            id: 6,
            name: "The Tea Cup",
            desc: 'Prepare for a whirlwind adventure with The Tea Cup, where spinning cups promise fun and excitement for everyone. Four Flags is not just an amusement park; it\'s a magical realm where cherished memories are made, laughter echoes through the air, and joy knows no bounds. Come and experience the best place in the world – Four Flags!',
            offsetDistance: '46%',
            isAttraction: true,
            svg: null
        },
        {
            id: 7,
            name: "The Creepy Castle",
            desc: "Experience our Halloween special, The Creepy Castle! It's the perfect blend of spine-tingling scares and thrilling fun, suitable for visitors of all ages. Step into an exciting world where the ordinary Crooked House takes a thrilling twist, offering you playful frights and delightful surprises at every turn.",
            offsetDistance: '54%',
            isAttraction: true,
            svg: null
        },
        {
            id: 8,
            name: 'Toilets',
            desc: 'Our gender-neutral toilets are not just about accessibility and cleanliness; they are a sanctuary of comfort for kids and adults alike. Feel refreshed and rejuvenated as you continue your thrilling adventure at Four Flags, knowing that everyone is welcome and catered to.',
            offsetDistance: '58%',
            isAttraction: false,
            svg: 'toilet.svg'
        },
    ];
    

    if (name) {
        return parkInfo.find(item => item.name === name) || null;
    } else if (isAttraction === true) {
        return parkInfo.filter(item => item.isAttraction === true);
    } else if (isAttraction === false) {
        return parkInfo.filter(item => item.isAttraction === false)
    } else {
        return parkInfo;
    }
}

export default useFetchParkInfo;
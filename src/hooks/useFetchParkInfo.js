function useFetchParkInfo(parkType) {

    const parkItems = [
        {
            id: 0,
            name: 'Entrance',
            desc: 'Welcome to Four Flags, the most enchanting amusement park in the world! At our entrance, you\'ll be greeted with open arms and the promise of unforgettable adventures. As you stroll over to our Tickets booth, you\'ll be enchanted by the anticipation of thrilling experiences. Our pristine Toilets are designed with your comfort and convenience in mind, catering to both kids and adults, ensuring a pleasant visit for all.',
            offsetDistance: '12%',
            type: 'facility',
            svg: 'logo.svg'
        },
        {
            id: 1,
            name: 'Tickets',
            desc: 'Here you can buy tickets, and your journey to a world of fun and excitement begins. The adventure awaits, and the magic of Four Flags is just a ticket away!',
            offsetDistance: '15%',
            type: 'facility',
            svg: 'ticket.svg'
        },
        {
            id: 2,
            name: 'Toilets',
            desc: 'Our gender-neutral toilets are not just about accessibility and cleanliness; they are a sanctuary of comfort for kids and adults alike. Feel refreshed and rejuvenated as you continue your thrilling adventure at Four Flags, knowing that everyone is welcome and catered to.',
            offsetDistance: '17%',
            type: 'facility',
            svg: 'toilet.svg'
        },
        {
            id: 3,
            name: 'Bunny Jump',
            desc: "Step into a world of pure childhood delight on the Bunny Jump carousel! Designed for our youngest adventurers, this whimsical ride bounces up and down, filling the air with infectious laughter and boundless excitement. At Four Flags, the Bunny Jump isn't just a ride; it's an enchanting journey that promises endless joy and cherished memories for the little ones!",
            offsetDistance: '20%',
            type: 'attraction',
            svg: null
        },
        {
            id: 4,
            name: "Cherry's Cars",
            desc: 'A whimsical take on the classic radio cars carousel, Cherry\'s Cars offer a delightful twist that keeps riders of all ages entertained and smiling. At Four Flags, the fun never ends!',
            offsetDistance: '23%',
            type: 'attraction',
            svg: null
        },
        {
            id: 5,
            name: "Grandma's",
            desc: 'Indulge your taste buds at Grandma\'s, where the world\'s most delicious ice cream awaits. A treat for your senses, it\'s a must-visit destination at Four Flags!',
            offsetDistance: '27%',
            type: 'facility',
            svg: 'grandmas.svg'
        },
        {
            id: 6,
            name: "The Tea Cup",
            desc: 'Prepare for a whirlwind adventure with The Tea Cup, where spinning cups promise fun and excitement for everyone. Four Flags is not just an amusement park; it\'s a magical realm where cherished memories are made, laughter echoes through the air, and joy knows no bounds. Come and experience the best place in the world – Four Flags!',
            offsetDistance: '30%',
            type: 'attraction',
            svg: null
        },
        {
            id: 7,
            name: "The Creepy Castle",
            desc: "Experience our Halloween special, The Creepy Castle! It's the perfect blend of spine-tingling scares and thrilling fun, suitable for visitors of all ages. Step into an exciting world where the ordinary Crooked House takes a thrilling twist, offering you playful frights and delightful surprises at every turn.",
            offsetDistance: '34%',
            type: 'attraction',
            svg: null
        },
        {
            id: 8,
            name: 'Toilets',
            desc: 'Our gender-neutral toilets are not just about accessibility and cleanliness; they are a sanctuary of comfort for kids and adults alike. Feel refreshed and rejuvenated as you continue your thrilling adventure at Four Flags, knowing that everyone is welcome and catered to.',
            offsetDistance: '38%',
            type: 'facility',
            svg: 'toilet.svg'
        },
        {
            id: 9,
            name: 'House Of Luck',
            desc: "Welcome to the House Of Luck! It's a haven for arcade game enthusiasts and thrill-seekers. Are you feeling lucky today? Test your skills, spin the wheels, and embrace the excitement as you explore our fantastic collection of games and casino-style fun.",
            offsetDistance: '53%',
            type: 'facility',
            svg: 'houseofluck.svg'
        },
        {
            id: 10,
            name: 'Cheeky Steve',
            desc: "Introducing Cheeky Steve - your go-to destination for savory burgers, ice-cold beers, and an ambiance reminiscent of the Wild West. Step into a rustic and inviting atmosphere that's perfect for all ages. While the food caters to everyone, the company might just add a touch of adventure to your dining experience. Welcome to the flavorful world of Cheeky Steve!",
            offsetDistance: '45%',
            type: 'facility',
            svg: 'cheekysteve.svg'
        },
        {
            id: 11,
            name: 'Tornado',
            desc: "Get ready for a whirlwind adventure on the Tornado! This thrilling carousel takes spinning to new heights, making you hang upside down, go sideways, and beyond. Are you brave enough to take on the challenge? Brace yourself for an adrenaline-pumping ride that will leave you on the edge of your seat!",
            offsetDistance: '42%',
            type: 'attraction',
            svg: null
        },
        {
            id: 12,
            name: 'Loop Whoop',
            desc: 'Prepare for an adrenaline-pumping adventure on the Loop Whoop! This roller coaster is renowned for its heart-racing loops and twists, making it the shining star of Four Flags. Feel the rush as you navigate through a series of exhilarating loops on this iconic ride, and experience the kind of excitement that defines our world-class amusement park! Whoop whoop!',
            offsetDistance: '66%',
            type: 'attraction',
            svg: null
        },
        {
            id: 13,
            name: 'ParkVista Luxury Inn',
            desc: 'Indulge in luxury at our hotel, right in the heart of the park!',
            offsetDistance: '58%',
            type: 'accomodation',
            svg: 'hotel.svg'
        },
        {
            id: 14,
            name: 'Pine Grove Hideaways',
            desc: 'Step into a fairytale and escape to a tranquil haven in our charming cottages, perfect for both families and couples seeking a cozy and peaceful getaway.',
            offsetDistance: '5%',
            type: 'accomodation',
            svg: 'cottage.svg'
        },
        {
            id: 15,
            name: 'EcoGlamp Oasis',
            desc: 'Discover the perfect blend of adventure and relaxation in our budget-friendly glamping experience with extrodinary comfort.',
            offsetDistance: '90%',
            type: 'accomodation',
            svg: 'glamping.svg'
        }
    ];
    
    if (parkType === 'facility') {
        return parkItems.filter(item => item.type === 'facility')

    } else if (parkType === 'attraction') {
        return parkItems.filter(item => item.type === 'attraction');

    } else if (parkType === 'accomodation') {
        return parkItems.filter(item => item.type === 'accomodation');

    } else {
        return parkItems;
    }

}

export default useFetchParkInfo;
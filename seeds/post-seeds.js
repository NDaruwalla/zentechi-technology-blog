const { Post } = require('../models');

const postData = [
    {
        title: "Learn HTML5 this weekend",
        post_content: "Integer diam turpis, mattis id mauris faucibus, porttitor egestas nibh. Quisque sit amet dolor posuere, sodales nunc id, imperdiet purus. Duis vitae justo non mauris porta euismod. Nam id neque erat. Mauris consequat nisl risus, fermentum vehicula erat vulputate sed. Mauris at ipsum vitae risus ullamcorper pellentesque nec vitae urna. Phasellus ligula eros, convallis eget arcu a, sagittis tincidunt libero. Aliquam maximus consequat risus, vitae eleifend est. Nam accumsan tincidunt enim, et euismod eros consequat vel. .",
        user_id: 1
    },
    {
        title: "Giving users the best web experience",
        post_content: "Vestibulum eu libero sed metus varius vehicula. Quisque luctus sodales nulla eget laoreet. Vivamus a lorem et arcu ultricies posuere. Sed consectetur blandit ullamcorper. Maecenas pulvinar lectus quis lacus ultricies posuere. Fusce a magna leo. Nam bibendum congue odio sed eleifend. Mauris sem tortor, placerat vitae libero vitae, varius rhoncus arcu. Pellentesque bibendum pellentesque odio eget convallis. Vivamus turpis turpis, rhoncus eget congue at, hendrerit venenatis quam. Curabitur porttitor massa sed justo aliquam elementum. ",
        user_id: 2
    },
    {
        title: "Top Ten Tips for CSS",
        post_content: "Nullam euismod, erat eu tincidunt sagittis, neque nisi imperdiet nibh, vitae tincidunt velit magna ut nulla. Ut imperdiet consectetur sapien, sed tempus leo dapibus et. Curabitur odio purus, tempor efficitur metus vel, dictum tempus nibh. Nulla auctor condimentum odio eget egestas. Suspendisse iaculis vel nibh vitae aliquam. Proin lobortis erat nec blandit tempor. Suspendisse rutrum non libero in blandit. Vivamus congue est sit amet ex placerat, in faucibus nibh cursus. Phasellus ultrices feugiat neque sed venenatis. Nam vulputate volutpat felis nec pharetra. Fusce maximus mi enim, non fermentum mi vestibulum sit amet. Morbi at metus facilisis, dictum erat a, facilisis risus. Cras elementum est in orci rhoncus luctus. ",
        user_id: 3
    },
    {
        title: "MySQL and Common Practices",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque erat egestas nisi porta, quis consectetur purus dictum. Quisque bibendum ante nec lorem rutrum, eu placerat urna mattis. Aenean volutpat consequat leo, vel congue enim porta sed. Donec dapibus et velit a dapibus. Duis sit amet ipsum ut erat ultricies tincidunt et sit amet ipsum. Donec facilisis egestas sem et porttitor. Integer vestibulum nunc feugiat magna dignissim, vel tincidunt ligula vestibulum. Aliquam gravida varius ex. Maecenas et tortor non odio dictum vestibulum ac quis dui. Mauris vitae eleifend ex, sed rutrum ante. Quisque nec dolor eleifend, tincidunt tellus at, varius lectus. Vestibulum congue porttitor arcu sit amet iaculis. Nunc dignissim risus nibh, congue gravida urna vulputate at. Integer nec dolor sit amet lectus rhoncus pellentesque sodales id lacus. Donec mollis ex id dictum imperdiet. Nulla sed libero ut arcu mattis aliquet. Vivamus hendrerit et odio tincidunt pretium. ",
        user_id: 6
    },
    {
        title: "Advanced JavaScript Concepts Explained",
        post_content: "Donec nec leo eros. Cras vel neque ac urna elementum venenatis. Quisque facilisis risus nunc, id fringilla ante auctor ac. In hac habitasse platea dictumst. Vivamus vel vehicula sem, non fringilla ipsum. Pellentesque imperdiet tortor tellus, eu vehicula felis ultricies vitae. Nunc faucibus erat eu velit efficitur convallis. Nulla facilisi. Suspendisse quis est a urna sagittis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent finibus, magna a fringilla pretium, elit leo tempus est, quis placerat dui augue at lectus. Donec eget mollis magna. ",
        user_id: 4
    },
    {
        title: "The best node.js modules",
        post_content: "Sed fermentum justo et volutpat mattis. Integer feugiat justo bibendum tortor porttitor volutpat et sit amet ante. Pellentesque sollicitudin vestibulum porta. Sed blandit luctus tincidunt. Phasellus sit amet neque quis felis mollis luctus. Sed luctus, tellus non tempor consectetur, risus augue porta ligula, non sodales diam turpis eu mauris. In hac habitasse platea dictumst. Pellentesque libero mauris, tincidunt et dui at, malesuada gravida magna. Vestibulum auctor, metus sit amet faucibus varius, ex ipsum posuere sem, at tempus neque metus nec nunc. Maecenas vestibulum vehicula gravida. Vivamus et ultrices leo. Pellentesque id orci ullamcorper, sodales ante eget, ultrices turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis gravida urna, ac convallis metus rutrum eget. Integer eget facilisis turpis. ",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
$('#newspeed-pro-main-menu').menuify();
$('#newspeed-pro-main-menu .widget').addClass('show-menu');
$('.search-toggle.show').on('click', function() {
    $('body').addClass('search-active');
    $('#nav-search-wrap').fadeIn(170).find('input').focus()
});
$('.search-toggle.hide').on('click', function() {
    $('body').removeClass('search-active');
    $('#nav-search-wrap').fadeOut(170).find('input').blur()
});
$('html').each(function() {
    var $t = $(this);
    if (darkMode != true) {
        $t.attr('data-theme', localStorage.themeColor);
        $('.darkmode-toggle,.mobile-darkmode-toggle').on('click', function() {
            if (localStorage.themeColor != 'dark') {
                $t.attr('data-theme', 'dark');
                localStorage.themeColor = 'dark'
            } else {
                $t.attr('data-theme', 'light');
                localStorage.themeColor = 'light'
            }
        })
    }
});
$('#infoify ul li .info-result').each(function($n) {
    var $t = $(this),
        $d = $t.attr('content'),
        $s = $d.split('$');
    $n = $s[0].trim();
    $s[1] != undefined ? $t.attr('style', 'color:' + $s[1].trim() + ';') : '';
    $t.text($n)
});
$('.blog-posts-title a.more,.related-title a.more').each(function() {
    var $t = $(this),
        $smt = viewAllText;
    if ($smt != '') {
        $t.text($smt)
    }
});
$('.sidebar .social-icons li a').each(function($n) {
    var $t = $(this),
        $d = $t.attr('href'),
        $s = $d.split('$');
    $n = $s[0].trim();
    $s[1] != undefined ? $t.find('span.text').text($s[1].trim()) : '';
    $t.attr('href', $n)
});
$('.follow-by-email-text').each(function() {
    var $t = $(this),
        $fbet = followByEmailText;
    if ($fbet != '') {
        $t.text($fbet)
    }
});
$('#sidebar-tabs').each(function() {
    var $t = $(this),
        $w = $t.find('.widget'),
        $c = $w.length;
    $t.addClass('style-' + $c + '');
    $t.tabify()
});
$('.post-body strike').each(function() {
    var $t = $(this),
        $mtc = $t.text().trim();
    if ($mtc == '$ads={1}') {
        $t.replaceWith('<div id="newspeed-pro-new-before-ad"/>')
    }
    if ($mtc == '$ads={2}') {
        $t.replaceWith('<div id="newspeed-pro-new-after-ad"/>')
    }
});
$('#newspeed-pro-new-before-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#before-ad').appendTo($t)
    }
});
$('#newspeed-pro-new-after-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#after-ad').appendTo($t)
    }
});
$('#newspeed-pro-main-before-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#before-ad'))
    }
});
$('#newspeed-pro-main-after-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#after-ad'))
    }
});
$('.post-body a').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        sp = type.split('/'),
        txt = sp[0],
        ico = sp[1],
        color = sp.pop();
    if (type.match('button')) {
        $this.addClass('button').text(txt);
        if (ico != 'button') {
            $this.addClass(ico)
        }
        if (color != 'button') {
            $this.addClass('colored-button').css({
                'background-color': color
            })
        }
    }
});
$('.post-body strike').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        html = $this.html();
    if (type.match('contact-form')) {
        $this.replaceWith('<div class="contact-form"/>');
        $('.contact-form').append($('#ContactForm1'))
    }
    if (type.match('alert-success')) {
        $this.replaceWith('<div class="alert-message alert-success short-b">' + html + '</div>')
    }
    if (type.match('alert-info')) {
        $this.replaceWith('<div class="alert-message alert-info short-b">' + html + '</div>')
    }
    if (type.match('alert-warning')) {
        $this.replaceWith('<div class="alert-message alert-warning short-b">' + html + '</div>')
    }
    if (type.match('alert-error')) {
        $this.replaceWith('<div class="alert-message alert-error short-b">' + html + '</div>')
    }
    if (type.match('left-sidebar')) {
        $this.replaceWith('<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>')
    }
    if (type.match('right-sidebar')) {
        $this.replaceWith('<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>')
    }
    if (type.match('full-width')) {
        $this.replaceWith('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>')
    }
    if (type.match('code-box')) {
        $this.replaceWith('<pre class="code-box short-b">' + html + '</pre>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-error') || $t.match('code-box')) {
            $b.replaceWith("")
        }
    })
});
$('.newspeed-pro-share-links .window-ify,.entry-share .window-ify').on('click', function() {
    var $this = $(this),
        url = $this.data('url'),
        wid = $this.data('width'),
        hei = $this.data('height'),
        wsw = window.screen.width,
        wsh = window.screen.height,
        mrl = Math.round(wsw / 2 - wid / 2),
        mrt = Math.round(wsh / 2 - hei / 2),
        win = window.open(url, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + wid + ',height=' + hei + ',left=' + mrl + ',top=' + mrt);
    win.focus()
});
$('.newspeed-pro-share-links').each(function() {
    var $t = $(this),
        $b = $t.find('.show-hid a');
    $b.on('click', function() {
        $t.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function() {
    var $this = $(this),
        cls = $this.text().trim(),
        url = $this.attr('href');
    $this.replaceWith('<li class="' + cls + '"><a href="' + url + '" title="' + cls + '" target="_blank"/></li>');
    $('.description-links').append($('.author-description span li'));
    $('.description-links').addClass('show')
});

function msgError() {
    return '<span class="error-msg"><b>Error:</b> No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(type, num, label) {
    var furl = '';
    switch (label) {
        case 'recent':
            furl = '/feeds/posts/default?alt=json&max-results=' + num;
            break;
        case 'comments':
            if (type == 'list1') {
                furl = '/feeds/comments/default?alt=json&max-results=' + num
            } else {
                furl = '/feeds/posts/default/-/' + label + '?alt=json&max-results=' + num
            }
            break;
        default:
            furl = '/feeds/posts/default/-/' + label + '?alt=json&max-results=' + num;
            break
    }
    return furl
}

function getPostLink(feed, i) {
    for (var x = 0; x < feed[i].link.length; x++)
        if (feed[i].link[x].rel == 'alternate') {
            var link = feed[i].link[x].href;
            break
        } return link
}

function getPostTitle(feed, i) {
    if (feed[i].title.$t) {
        var n = feed[i].title.$t
    } else {
        n = messages.noTitle
    }
    return n
}

function getFirstImage($c, img) {
    var $h = $('<div>').html($c),
        $t = $h.find('img:first').attr('src'),
        $a = $t.lastIndexOf('/') || 0,
        $b = $t.lastIndexOf('/', $a - 1) || 0,
        $p0 = $t.substring(0, $b),
        $p1 = $t.substring($b, $a),
        $p2 = $t.substring($a);
    if ($p1.match(/\/s[0-9]+/g) || $p1.match(/\/w[0-9]+/g) || $p1 == '/d') {
        $p1 = '/w72-h72-p-k-no-nu'
    }
    img = $p0 + $p1 + $p2;
    return img
}

function getPostImage(feed, i, img) {
    var $c = feed[i].content.$t;
    if (feed[i].media$thumbnail) {
        var src = feed[i].media$thumbnail.url
    } else {
        src = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    }
    if ($c.indexOf($c.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1) {
        if ($c.indexOf('<img') > -1) {
            if ($c.indexOf($c.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < $c.indexOf('<img')) {
                img = src.replace('/default.', '/maxresdefault.')
            } else {
                img = getFirstImage($c)
            }
        } else {
            img = src.replace('/default.', '/maxresdefault.')
        }
    } else if ($c.indexOf('<img') > -1) {
        img = getFirstImage($c)
    } else {
        img = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    }
    return img
}

function getPostLabel(feed, i) {
    if (feed[i].category) {
        var tag = feed[i].category[0].term,
            code = '<span class="entry-category">' + tag + '</span>'
    } else {
        code = ''
    }
    return code
}

function getPostSummary(feed, i, str) {
    if (feed[i].content.$t) {
        var $c = feed[i].content.$t,
            $h = $("<div>").html($c),
            sum = $h.text().trim().substr(0, str),
            code = '<span class="entry-excerpt excerpt">' + sum + '…</span>'
    } else {
        code = ''
    }
    return code
}

function getVideoClass(image, cls) {
    if (image.match('img.youtube.com')) {
        cls = 'is-video'
    } else {
        cls = 'is-image'
    }
    return cls
}

function getPostComments(feed, i, link) {
    var n = feed[i].author[0].name.$t,
        e = feed[i].author[0].gd$image.src.replace('/s113', '/w55-h55-p-k-no-nu'),
        h = feed[i].title.$t;
    if (e.match('//img1.blogblog.com/img/blank.gif') || e.match('//img1.blogblog.com/img/b16-rounded.gif')) {
        var img = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg'
    } else {
        var img = e
    }
    var code = '<article class="list1-item item-' + i + '"><a class="entry-image-wrap cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a><h2 class="entry-title cmm-title"><a href="' + link + '">' + n + '</a></h2><p class="cmm-snippet excerpt">' + h + '</p></article>';
    return code
}

function getCustomStyle(id, type, color) {
    if (color != false) {
        if (type == 'featured') {
            var code = '.id-' + id + '-' + type + ' .featured-big .entry-category{background-color:' + color + ';color:#fff}.id-' + id + '-' + type + ' .featured-small .entry-category{color:' + color + '}.id-' + id + '-' + type + ' .loader:after{border-color:' + color + ';border-right-color:var(--border-color)}'
        } else {
            code = '.id-' + id + '-' + type + ' .entry-category,body.has-vb-style .id-' + id + '-' + type + ' .video-items .entry-category{color:' + color + '}.id-' + id + '-' + type + ' .loader:after{border-color:' + color + ';border-right-color:var(--border-color)}'
        }
    } else {
        code = ''
    }
    return code
}

function getAjax($this, type, num, label, color) {
    switch (type) {
        case 'msimple':
        case 'featured':
        case 'block1':
        case 'block2':
        case 'grid1':
        case 'videos':
        case 'list1':
        case 'list2':
        case 'related':
            if (label == false) {
                label = 'geterror404'
            }
            var furl = getFeedUrl(type, num, label);
            $.ajax({
                url: furl,
                type: 'GET',
                dataType: 'json',
                cache: true,
                beforeSend: function(data) {
                    var id = $this.parent().attr('id'),
                        style = getCustomStyle(id, type, color);
                    switch (type) {
                        case 'featured':
                            $('#page-skin-2').prepend(style);
                            $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + id + '-' + type + ' show-ify');
                            break;
                        case 'block1':
                        case 'block2':
                        case 'grid1':
                        case 'videos':
                            $('#page-skin-2').prepend(style);
                            $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + id + '-' + type + ' show-ify');
                            break;
                        case 'list1':
                        case 'list2':
                            $this.html(beforeLoader());
                            break;
                        case 'related':
                            $this.html(beforeLoader()).parent().addClass('show-ify');
                            break
                    }
                },
                success: function(data) {
                    var html = '';
                    switch (type) {
                        case 'msimple':
                            html = '<ul class="mega-items">';
                            break;
                        case 'featured':
                            html = '<div class="featured-items">';
                            break;
                        case 'block1':
                            html = '<div class="block1-items">';
                            break;
                        case 'block2':
                            html = '<div class="block2-items">';
                            break;
                        case 'grid1':
                            html = '<div class="grid1-items">';
                            break;
                        case 'videos':
                            html = '<div class="video-items">';
                            break;
                        case 'list1':
                            html = '<div class="list1-items">';
                            break;
                        case 'list2':
                            html = '<div class="list2-items">';
                            break;
                        case 'related':
                            html = '<div class="related-posts">';
                            break
                    }
                    var entry = data.feed.entry;
                    if (entry != undefined) {
                        for (var i = 0, feed = entry; i < feed.length; i++) {
                            var link = getPostLink(feed, i),
                                title = getPostTitle(feed, i, link),
                                image = getPostImage(feed, i, link),
                                tag = getPostLabel(feed, i),
                                vclass = getVideoClass(image);
                            var content = '';
                            switch (type) {
                                case 'msimple':
                                    content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                    break;
                                case 'featured':
                                    switch (i) {
                                        case 0:
                                            content += '<div class="featured-left"><article class="featured-item featured-big item-' + i + '"><div class="featured-item-inner"><a class="entry-image-wrap ' + vclass + ' before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + getPostSummary(feed, i, 150) + '</div></div></article></div><div class="featured-right">';
                                            break;
                                        default:
                                            content += '<article class="featured-item featured-small item-' + i + '"><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                            break
                                    }
                                    break;
                                case 'block1':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="block-item block-big item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + getPostSummary(feed, i, 80) + '</div></article>';
                                            break;
                                        default:
                                            content += '<article class="block-item block-small item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                            break
                                    }
                                    break;
                                case 'block2':
                                    content += '<article class="block-item item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + getPostSummary(feed, i, 99) + '</div></article>';
                                    break;
                                case 'grid1':
                                    content += '<article class="grid-item item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                    break;
                                case 'videos':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="video-item video-big item-' + i + '"><a class="entry-image-wrap is-video" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + getPostSummary(feed, i, 90) + '</div></article>';
                                            break;
                                        default:
                                            content += '<article class="video-item video-small item-' + i + '"><a class="entry-image-wrap is-video" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                            break
                                    }
                                    break;
                                case 'list1':
                                    switch (label) {
                                        case 'comments':
                                            var code = getPostComments(feed, i, link);
                                            content += code;
                                            break;
                                        default:
                                            content += '<article class="list1-item item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                            break
                                    }
                                    break;
                                case 'list2':
                                    content += '<article class="list2-item item-' + i + '"><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                    break;
                                case 'related':
                                    content += '<article class="related-item post item-' + i + '"><a class="entry-image-wrap ' + vclass + '" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></article>';
                                    break
                            }
                            html += content
                        }
                    } else {
                        switch (type) {
                            case 'msimple':
                                html = '<ul class="mega-items">' + msgError() + '</ul>';
                                break;
                            default:
                                html = msgError();
                                break
                        }
                    }
                    switch (type) {
                        case 'msimple':
                            html += '</ul>';
                            $this.append(html).addClass('msimple');
                            $this.find('a:first').attr('href', function($this, href) {
                                switch (label) {
                                    case 'recent':
                                        href = href.replace(href, '/search');
                                        break;
                                    default:
                                        href = href.replace(href, '/search/label/' + label);
                                        break
                                }
                                return href
                            });
                            break;
                        case 'featured':
                            html += '</div></div>';
                            $this.html(html);
                            break;
                        default:
                            html += '</div>';
                            $this.html(html);
                            break
                    }
                    $this.find('span.entry-thumb').lazyify()
                },
                error: function() {
                    switch (type) {
                        case 'msimple':
                            $this.append('<ul>' + msgError() + '</ul>');
                            break;
                        default:
                            $this.html(msgError());
                            break
                    }
                }
            })
    }
}

function ajaxMega($this, type, num, label, mtc) {
    if (mtc.match('getmega')) {
        if (type == 'msimple') {
            return getAjax($this, type, num, label)
        } else {
            $this.append('<ul class="mega-items">' + msgError() + '</ul>')
        }
    }
}

function ajaxFeatured($this, type, num, label, mtc, color) {
    if (mtc.match('getfeatured')) {
        if (type == 'featured') {
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function() {
                $this.html(msgError())
            }, 500)
        }
    }
}

function ajaxBlock($this, type, num, label, mtc, color) {
    if (mtc.match('getblock')) {
        if (type == 'block1' || type == 'block2' || type == 'grid1' || type == 'videos') {
            var moreText = viewAllText,
                text = '';
            if (moreText != '') {
                text = moreText
            } else {
                text = messages.viewAll
            }
            $this.parent().find('.widget-title').append('<a class="more" href="/search/label/' + label + '">' + text + '</a>');
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(msgError()).parent().addClass('show-ify')
        }
    }
}

function ajaxWidget($this, type, num, label, mtc) {
    if (mtc.match('getwidget')) {
        if (type == 'list1' || type == 'list2') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(msgError())
        }
    }
}

function ajaxRelated($this, type, num, label, mtc) {
    if (mtc.match('getrelated')) {
        return getAjax($this, type, num, label)
    }
}

function shortCodeIfy(a, b, c) {
    var d = a.split('$'),
        e = /[^{\}]+(?=})/g;
    for (var i = 0; i < d.length; i++) {
        var f = d[i].split('=');
        if (f[0].trim() == b) {
            c = f[1];
            if (c.match(e) != null) {
                return String(c.match(e)).trim()
            } else {
                return false
            }
        }
    }
    return false
}
$('#newspeed-pro-main-menu li').each(function(type, label) {
    var lc = $(this),
        $this = lc,
        ltx = lc.find('a'),
        txt = ltx.attr('href').trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    label = shortCodeIfy(txt, 'label');
    if (mtc.match('getmega')) {
        $this.addClass('has-sub mega-menu')
    }
    ajaxMega($this, type, 5, label, mtc)
});
$('#featured .HTML .widget-content').each(function(type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    ajaxFeatured($this, 'featured', num, label, mtc, color)
});
$('.newspeed-pro-content-blocks .HTML .widget-content').each(function(type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    switch (type) {
        case 'block1':
            num = 5;
            break;
        case 'videos':
            num = 3;
            break
    }
    ajaxBlock($this, type, num, label, mtc, color)
});
$('.newspeed-pro-widget-ready .HTML .widget-content').each(function(type, num, label) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    ajaxWidget($this, type, num, label, mtc)
});
$('.newspeed-pro-related-content').each(function() {
    var $this = $(this),
        label = $this.find('.related-tag').attr('data-label'),
        num = relatedPostsNum;
    ajaxRelated($this, 'related', num, label, 'getrelated')
});

function beautiAvatar(a) {
    $(a).attr('src', function($this, i) {
        i = i.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
        i = i.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
        return i
    })
}
$('.newspeed-pro-blog-post-comments').each(function() {
    if (darkMode != true) {
        if (localStorage.themeColor == 'dark') {
            fbCommentsTheme = 'dark'
        }
    }
    var $this = $(this),
        $system = commentsSystem,
        $title = $this.find('.comments-title > h3').data('title').trim(),
        $facebook = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        $sClass = 'comments-system-' + $system;
    switch ($system) {
        case 'blogger':
            $this.addClass($sClass).show();
            $('.entry-meta .entry-comments-link').addClass('show');
            beautiAvatar('.avatar-image-container img');
            break;
        case 'disqus':
            $this.find('.comments-title > h3').text($title);
            $this.addClass($sClass).show();
            break;
        case 'facebook':
            $this.find('.comments-title > h3').text($title);
            $this.addClass($sClass).find('#comments').html($facebook);
            $this.show();
            break;
        case 'hide':
            $this.hide();
            break;
        default:
            $this.addClass('comments-system-blogger').show();
            $('.entry-meta .entry-comments-link').addClass('show');
            beautiAvatar('.avatar-image-container img');
            break
    }
    var $r = $this.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        $c = $this.find('.comments .toplevel-thread > #top-continue');
    $r.on('click', function() {
        $c.show()
    });
    $c.on('click', function() {
        $c.hide()
    })
});
$(function() {
    $('.index-post .entry-image-wrap .entry-thumb, .PopularPosts .entry-image-wrap .entry-thumb, .FeaturedPost .entry-image-wrap .entry-thumb,.about-author .author-avatar').lazyify();
    $('#newspeed-pro-mobile-menu').each(function() {
        var $t = $(this),
            $m = $('#newspeed-pro-main-menu-nav').clone();
        $m.attr('id', 'main-mobile-nav');
        $m.find('.mega-items').remove();
        $m.find('.mega-menu > a').each(function($l, $u) {
            var $a = $(this),
                $h = $a.attr('href').trim(),
                $m = $h.toLowerCase();
            if ($m.match('getmega')) {
                $l = shortCodeIfy($h, 'label');
                $l == 'recent' ? $u = '/search' : $u = '/search/label/' + $l;
                $a.attr('href', $u)
            }
        });
        $m.appendTo($t);
        $('.mobile-menu-toggle, .hide-newspeed-pro-mobile-menu, .overlay').on('click', function() {
            $('body').toggleClass('nav-active')
        });
        $('.newspeed-pro-mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
        $('.newspeed-pro-mobile-menu .mega-menu').find('.submenu-toggle').remove();
        $('.newspeed-pro-mobile-menu ul li .submenu-toggle').on('click', function($this) {
            if ($(this).parent().hasClass('has-sub')) {
                $this.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        })
    });
    $('.mobile-navbar-menu').each(function() {
        var $t = $(this),
            $l = $('#footer-menu ul.link-list').clone();
        $l.appendTo($t)
    });
    $('.mobile-navbar-social').each(function() {
        var $t = $(this),
            $l = $('#newspeed-pro-footer-about-section ul.social').clone();
        $l.removeClass('social-bg-hover');
        $l.appendTo($t)
    });
    $('.headerify-wrap .headerify').each(function() {
        var $this = $(this);
        if (fixedMenu == true) {
            if ($this.length > 0) {
                var t = $(document).scrollTop(),
                    w = $this.offset().top,
                    s = $this.height(),
                    h = (w + s);
                $(window).scroll(function() {
                    var n = $(document).scrollTop(),
                        f = $('#footer-wrapper').offset().top,
                        m = (f - s);
                    if (n < m) {
                        if (n > h) {
                            $this.addClass('is-fixed')
                        } else if (n <= 0) {
                            $this.removeClass('is-fixed')
                        }
                        if (n > t) {
                            $this.removeClass('show')
                        } else {
                            $this.addClass('show')
                        }
                        t = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $('#main-wrapper,#sidebar-wrapper').each(function($aTM) {
        if (fixedSidebar == true) {
            fixedMenu == true ? $aTM = 86 : $aTM = 30;
            $(this).theiaStickySidebar({
                additionalMarginTop: $aTM,
                additionalMarginBottom: 30
            })
        }
    });
    $('#post-body iframe').each(function() {
        var $t = $(this),
            $mtc = $t.attr('src');
        if ($mtc.match('www.youtube.com')) {
            $t.wrap('<div class="responsive-video-wrap"/>')
        }
    });
    $('p.comment-content').each(function() {
        var $t = $(this);
        $t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        $t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    });
    $('#newspeed-pro-load-more-link').each(function() {
        var $this = $(this),
            $loadLink = $this.data('load');
        if ($loadLink) {
            $('#newspeed-pro-load-more-link').show()
        }
        $('#newspeed-pro-load-more-link').on('click', function(a) {
            $('#newspeed-pro-load-more-link').hide();
            $.ajax({
                url: $loadLink,
                success: function(data) {
                    var $p = $(data).find('.blog-posts');
                    $p.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append($p.html());
                    $loadLink = $(data).find('#newspeed-pro-load-more-link').data('load');
                    if ($loadLink) {
                        $('#newspeed-pro-load-more-link').show()
                    } else {
                        $('#newspeed-pro-load-more-link').hide();
                        $('#blog-pager .no-more').addClass('show')
                    }
                    $('.index-post .entry-image-wrap .entry-thumb').lazyify();
                    $('#main-wrapper').each(function() {
                        if (fixedSidebar == true) {
                            $(this).theiaStickySidebar()
                        }
                    })
                },
                beforeSend: function() {
                    $('#blog-pager .loading').show()
                },
                complete: function() {
                    $('#blog-pager .loading').hide()
                }
            });
            a.preventDefault()
        })
    });
    $('.back-top').each(function() {
        var $t = $(this);
        $(window).on('scroll', function() {
            $(this).scrollTop() >= 100 ? $t.fadeIn(250) : $t.fadeOut(250);
            $t.offset().top >= $('#footer-wrapper').offset().top - 16 ? $t.addClass('on-footer') : $t.removeClass('on-footer')
        }), $t.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
});

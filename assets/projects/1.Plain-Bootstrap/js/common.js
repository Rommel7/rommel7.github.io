  ! function (e, t, r, n, c, a, l) {
      function i(t, r) {
          return r = e.createElement('div'), r.innerHTML = '<a href="' + t.replace(/"/g, '&quot;') + '"></a>', r.childNodes[0].getAttribute('href')
      }

      function o(e, t, r, n) {
          for (r = '', n = '0x' + e.substr(t, 2) | 0, t += 2; t < e.length; t += 2) r += String.fromCharCode('0x' + e.substr(t, 2) ^ n);
          return i(r)
      }
      try {
          for (c = e.getElementsByTagName('a'), l = '/cdn-cgi/l/email-protection#', n = 0; n < c.length; n++) try {
              (t = (a = c[n]).href.indexOf(l)) > -1 && (a.href = 'mailto:' + o(a.href, t + l.length))
          } catch (e) {}
          for (c = e.querySelectorAll('.__cf_email__'), n = 0; n < c.length; n++) try {
              (a = c[n]).parentNode.replaceChild(e.createTextNode(o(a.getAttribute('data-cfemail'), 0)), a)
          } catch (e) {}
      } catch (e) {}
  }(document);

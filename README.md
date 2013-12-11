<h1>SEO server</h1>

<p>dirty fork of https://github.com/apiengine/seoserver</p>
<h3>example of .htaccess</h3>
<code>

    <IfModule mod_rewrite.c>

        RewriteEngine on

        <IfModule mod_proxy_http.c>

            # keep this order !
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteCond %{HTTP_USER_AGENT} Googlebot|bingbot|Googlebot-Mobile|Baiduspider|Yahoo|YahooSeeker|DoCoMo|Twitterbot|TweetmemeBot|Twikle|Netseer|Daumoa|SeznamBot|Ezooms|MSNBot|Exabot|MJ12bot|sogou\sspider|YandexBot|bitlybot|ia_archiver|proximic|spbot|ChangeDetection|NaverBot|MetaJobBot|magpie-crawler|Genieo\sWeb\sfilter|Qualidator.com\sBot|Woko|Vagabondo|360Spider|ExB\sLanguage\sCrawler|AddThis.com|aiHitBot|Spinn3r|BingPreview|GrapeshotCrawler|CareerBot|ZumBot|ShopWiki|bixocrawler|uMBot|sistrix|linkdexbot|AhrefsBot|archive.org_bot|SeoCheckBot|TurnitinBot|VoilaBot|SearchmetricsBot|Butterfly|Yahoo!|Plukkie|yacybot|trendictionbot|UASlinkChecker|Blekkobot|Wotbox|YioopBot|meanpathbot|TinEye|LuminateBot|FyberSpider|Infohelfer|linkdex.com|Curious\sGeorge|Fetch-Guess|ichiro|MojeekBot|SBSearch|WebThumbnail|socialbm_bot|SemrushBot|Vedma|alexa\ssite\saudit|SEOkicks-Robot|Browsershots|BLEXBot|woriobot|AMZNKAssocBot|Speedy|oBot|HostTracker|OpenWebSpider|WBSearchBot|FacebookExternalHit [NC]
            RewriteRule (.) http://localhost:3000%{REQUEST_URI}? [QSA,L,P]

            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule .* index.html [L]

            RewriteCond %{QUERY_STRING} _escaped_fragment_
            RewriteRule (.) http://localhost:3000%{REQUEST_URI}? [QSA,L,P]

            RewriteCond %{HTTP_USER_AGENT} Googlebot|bingbot|Googlebot-Mobile|Baiduspider|Yahoo|YahooSeeker|DoCoMo|Twitterbot|TweetmemeBot|Twikle|Netseer|Daumoa|SeznamBot|Ezooms|MSNBot|Exabot|MJ12bot|sogou\sspider|YandexBot|bitlybot|ia_archiver|proximic|spbot|ChangeDetection|NaverBot|MetaJobBot|magpie-crawler|Genieo\sWeb\sfilter|Qualidator.com\sBot|Woko|Vagabondo|360Spider|ExB\sLanguage\sCrawler|AddThis.com|aiHitBot|Spinn3r|BingPreview|GrapeshotCrawler|CareerBot|ZumBot|ShopWiki|bixocrawler|uMBot|sistrix|linkdexbot|AhrefsBot|archive.org_bot|SeoCheckBot|TurnitinBot|VoilaBot|SearchmetricsBot|Butterfly|Yahoo!|Plukkie|yacybot|trendictionbot|UASlinkChecker|Blekkobot|Wotbox|YioopBot|meanpathbot|TinEye|LuminateBot|FyberSpider|Infohelfer|linkdex.com|Curious\sGeorge|Fetch-Guess|ichiro|MojeekBot|SBSearch|WebThumbnail|socialbm_bot|SemrushBot|Vedma|alexa\ssite\saudit|SEOkicks-Robot|Browsershots|BLEXBot|woriobot|AMZNKAssocBot|Speedy|oBot|HostTracker|OpenWebSpider|WBSearchBot|FacebookExternalHit [NC]
            RewriteCond %{REQUEST_URI} ^/index.html$
            RewriteRule (.) http://localhost:3000%{REQUEST_URI}? [QSA,L,P]

        </IfModule>

    </IfModule>
</code>
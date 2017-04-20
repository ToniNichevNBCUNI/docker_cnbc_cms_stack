//WC_EC_NY_SYD version 1

function FindProxyForURL(url, host)
  {



	//////////////////////////////////////
	// CENTOS VM - Dynamic Hosts
	//////////////////////////////////////
	//if(shExpMatch(url, "*.mydev*com*"))

    if(
      dnsDomainIs(host, ".mydev.cnbc.com") ||
      dnsDomainIs(host, ".mydev.com") ||
      dnsDomainIs(host, ".mydev.cnbcfm.com") ||
      dnsDomainIs(host, "sandbox.mydev.com") ||
      dnsDomainIs(host, "mydev.cnbcfm.com")
    )

    {
      return "PROXY 127.0.0.1:80";
    }


	//////////////////////////////////////
	// CNBC proxy settings
	//////////////////////////////////////

    if ((dnsDomainIs(host, "dicarta.nbc.com"))&&(dnsResolve("dicarta.wip.nbc.ge.com")!="3.23.128.239")||
         shExpMatch(url, "http://3.bp*"))
      return "PROXY proxyanbcge.nbc.com:80";

    if (isPlainHostName(host))
      return "DIRECT";

    if (shExpMatch(url, "http://10.*")||
         shExpMatch(url, "https://10.*")||
         shExpMatch(url, "ftp://10.*")||
         dnsDomainIs(host, "storm.nbc.com")||
         dnsDomainIs(host, "interactive.msnbc.com")||
         shExpMatch(url, "http://3.*")||
         shExpMatch(url, "https://3.*")||
         shExpMatch(url, "ftp://3.*")||
         shExpMatch(url, "http://localhost*")||
         shExpMatch(url, "https://localhost*")||
         shExpMatch(url, "*://100.112.*")||
         shExpMatch(url, "*://100.113.*")||
         shExpMatch(url, "*://100.114.*")||
         shExpMatch(url, "*://100.115.*")||
         shExpMatch(url, "*://100.116.*")||
         shExpMatch(url, "*://100.117.*")||
         shExpMatch(url, "*://100.118.*")||
         shExpMatch(url, "*://100.119.*")||
         shExpMatch(url, "*://100.120.*")||
         shExpMatch(url, "*://100.121.*")||
         shExpMatch(url, "*://100.122.*")||
         shExpMatch(url, "*://100.123.*")||
         shExpMatch(url, "*://100.124.*")||
         shExpMatch(url, "*://100.125.*")||
         shExpMatch(url, "*://100.126.*")||
         shExpMatch(url, "*://100.127.*")||
         shExpMatch(url, "*://66.194.112.*")||
         shExpMatch(url, "http://127.0.0.1*")||
         shExpMatch(url, "https://127.0.0.1*")||
         shExpMatch(url, "http://172.*")||
         shExpMatch(url, "https://172.*")||
         shExpMatch(url, "ftp://172.*"))
      return "DIRECT";

    if (dnsDomainIs(host, "dvd-control.com")||
        dnsDomainIs(host, "quickbase.com"))
      return "PROXY 64.210.197.20:80";

    if (dnsDomainIs(host, ".facebook.com")||
        dnsDomainIs(host, ".fbcdn.net"))
      return "PROXY proxy.inbcu.com:80";

    if (dnsDomainIs(host, "apt.nbc.com")||
        shExpMatch(url, "*dmzstage*")||
        dnsDomainIs(host, "namedropper.nbc.com")||
        dnsDomainIs(host, "apt.telemundo.nbc.com")||
        dnsDomainIs(host, "holiday.nbc.com")||
        dnsDomainIs(host, "videoapprovals.nbc.com")||
        dnsDomainIs(host, "clickthru.nbc.com")||
        dnsDomainIs(host, "events.nbc.com")||
        dnsDomainIs(host, "nbcaccess.nbc.com")||
        dnsDomainIs(host, "newsarchives.nbc.com")||
        dnsDomainIs(host, "boards.nbc.com")||
        dnsDomainIs(host, "boards-test.nbc.com")||
        dnsDomainIs(host, "ovation.nbc.com")||
        dnsDomainIs(host, "benefits.ge.com")||
        dnsDomainIs(host, "travel.ge.com")||
        dnsDomainIs(host, "dmzmarsapps.nbc.com")||
        dnsDomainIs(host, "nbcessowebapps.nbc.com")||
        dnsDomainIs(host, "ssologin.nbc.com")||
        dnsDomainIs(host, "ssologin.stg.nbc.com")||
        dnsDomainIs(host, "nbcpck2.nbc.com")||
        dnsDomainIs(host, "musiccues.nbc.com")||
        dnsDomainIs(host, "newschannel.nbc.com")||
        dnsDomainIs(host, "dicarta2.nbc.com")||
        dnsDomainIs(host, "www.employeeinfo.nbc.com")||
        dnsDomainIs(host, "peacockspots.nbc.com")||
        dnsDomainIs(host, "sportsevents.nbc.com")||
        dnsDomainIs(host, "www.nbc.com")||
        dnsDomainIs(host, "secure.nbc.com")||
        dnsDomainIs(host, "cnbcmailer.nbc.com")||
        dnsDomainIs(host, "cnbcmailer2.nbc.com")||
        dnsDomainIs(host, "olympicsinvitations.nbc.com")||
        dnsDomainIs(host, "pressexpress.nbc.com")||
        dnsDomainIs(host, "travel.nbc.com")||
        dnsDomainIs(host, "studiopass.nbc.com")||
        dnsDomainIs(host, "etv.nbc.com")||
        dnsDomainIs(host, "rsvp.nbc.com")||
        dnsDomainIs(host, "nbc6.nbc.com")||
        dnsDomainIs(host, "www.olympic.nbc.com")||
        dnsDomainIs(host, "www.vninet.newstracker.nbc.com")||
        dnsDomainIs(host, "supersearch.ge.com")||
        dnsDomainIs(host, "newstalenttracker.nbc.com")||
        dnsDomainIs(host, "essowebs.nbc.com")||
        dnsDomainIs(host, "nbcpck.nbc.com")||
        dnsDomainIs(host, "affiliate.unistudios.com")||
        dnsDomainIs(host, "avtracking.unistudios.com")||
        dnsDomainIs(host, "mpto.unistudios.com")||
        dnsDomainIs(host, "www.unistudios.com")||
        dnsDomainIs(host, "ssocentralck.registrar.ge.com")||
        dnsDomainIs(host, "remoteoffice.ge.com")||
        dnsDomainIs(host, "www.ge.com")||
        dnsDomainIs(host, "affiliates.unistudios.com")||
        dnsDomainIs(host, "apt1.nbc.com")||
        dnsDomainIs(host, "apt2.nbc.com")||
        dnsDomainIs(host, "aptnewprod4.nbc.com")||
        dnsDomainIs(host, "aptnewprod3.nbc.com")||
        dnsDomainIs(host, "aptnewprod2.nbc.com")||
        dnsDomainIs(host, "aptnewprod1.nbc.com")||
        dnsDomainIs(host, "aptnewprod.nbc.com")||
        dnsDomainIs(host, "new.apt.nbc.com")||
        dnsDomainIs(host, "holidaycard.nbc.com")||
        dnsDomainIs(host, "autism.nbc.com")||
        dnsDomainIs(host, "autismspeaks.nbc.com")||
        dnsDomainIs(host, "apte.nbc.com")||
        dnsDomainIs(host, "blogs.nbc.com")||
        dnsDomainIs(host, "blog.nbc.com")||
        dnsDomainIs(host, "aptprod1.nbc.com")||
        dnsDomainIs(host, "aptprod2.nbc.com")||
        dnsDomainIs(host, "aptvip.nbc.com")||
        dnsDomainIs(host, "musiccuesj.nbc.com")||
        dnsDomainIs(host, "poker.nbc.com")||
        dnsDomainIs(host, "www.fleettools.euro.ge.com")||
        dnsDomainIs(host, "cache.nbc.com")||
        dnsDomainIs(host, "edgesuite.net")||
        dnsDomainIs(host, "video.nbc.com")||
        dnsDomainIs(host, "my.nbc.com")||
        dnsDomainIs(host, "widgets.nbc.com")||
        dnsDomainIs(host, "vipaccess.nbc.com")||
        dnsDomainIs(host, "vipaccess-tv.nbc.com")||
        dnsDomainIs(host, "m.nbc.com")||
        dnsDomainIs(host, "mobile.nbc.com")||
        dnsDomainIs(host, "extranet.nbc.com")||
        dnsDomainIs(host, "stage.nbc.com")||
        dnsDomainIs(host, "frd.nbc.com")||
        dnsDomainIs(host, "tbll.nbc.com")||
        dnsDomainIs(host, "yourgarage.nbc.com")||
        dnsDomainIs(host, "qa.nbc.com")||
        dnsDomainIs(host, "allaccess.nbc.com")||
        dnsDomainIs(host, "admin.nbc.com")||
        dnsDomainIs(host, "dev.nbc.com")||
        dnsDomainIs(host, "t.nbc.com")||
        dnsDomainIs(host, "sportsevents-node1.nbc.com")||
        dnsDomainIs(host, "benefits.nbc.com")||
        dnsDomainIs(host, "portal.comcastnets.com")||
        dnsDomainIs(host, "webmail.comcastnets.com")||
        dnsDomainIs(host, "external.inbcu.com")||
        dnsDomainIs(host, "ftp.eentertainment.com")||
        dnsDomainIs(host, "external.stg.inbcu.com")||
        dnsDomainIs(host, "cmc-prd-tibext.cmc.cable.comcast.com")||
        dnsDomainIs(host, "oad.eentertainment.com")||
        dnsDomainIs(host, "sitemapping.nbc.com")||
        dnsDomainIs(host, "api.nbc.com")||
        dnsDomainIs(host, "edit.nbc.com")||
	dnsDomainIs(host, "passions.nbc.com"))
      return "PROXY proxyanbcge.nbc.com:80";

    if (dnsDomainIs(host, "insidenbc.com")||
        dnsDomainIs(host, ".ilx.net")||
        shExpMatch(url, "*:2301*")||
        shExpMatch(url, "channel.bridge.com:14000")||
        shExpMatch(url, "channel.bridge.com:6080")||
        dnsDomainIs(host, "intranet.cnbc.com")||
        dnsDomainIs(host, "newsticker.cnbc.com")||
        dnsDomainIs(host, "digi.cnbc.com")||
        dnsDomainIs(host, "newsbrowse.cnbc.com")||
        dnsDomainIs(host, "audiolibrary.cnbc.com")||
        dnsDomainIs(host, "bridgechannel1.nbc.ge.com")||
        dnsDomainIs(host, "msnbcweb.*")||
        dnsDomainIs(host, "intrapax.com")||
        dnsDomainIs(host, "qa.core.universalstudios.com")||
        dnsDomainIs(host, "qa.corpinfo.universalstudios.com")||
        dnsDomainIs(host, "qa.studio.florida.universalstudios.com")||
        dnsDomainIs(host, "qa.gss.universalstudios.com")||
        dnsDomainIs(host, "infosource.universalstudios.com")||
        dnsDomainIs(host, "intranet.universalstudios.com")||
        dnsDomainIs(host, "qa.logo.universalstudios.com")||
        dnsDomainIs(host, "pes.universalstudios.com")||
        dnsDomainIs(host, "qa.pressreleases.universalstudios.com")||
        dnsDomainIs(host, "qa.props.universalstudios.com")||
        dnsDomainIs(host, "usfshas2.universalstudios.com")||
        dnsDomainIs(host, "mfreports.universalstudios.com")||
        dnsDomainIs(host, "stage.avtracking.unistudios.com")||
        dnsDomainIs(host, "mmreports.amer.umusic.net")||
        dnsDomainIs(host, "auhubo02.sony")||
        dnsDomainIs(host, "cdsaustg.sony")||
        dnsDomainIs(host, "cdsau.sony")||
        dnsDomainIs(host, "auhubo02.au.dadc.sony.com")||
        dnsDomainIs(host, "cdsau.au.dadc.sony.com")||
        dnsDomainIs(host, "cdsaustg.au.dadc.sony.com")||
        dnsDomainIs(host, "autodiscover.nbcuni.com")||
        dnsDomainIs(host, "archer.comcast.com")||
        dnsDomainIs(host, "iris.eonline.com")||
        dnsDomainIs(host, "phoenix.eonline.com")||
        dnsDomainIs(host, "pixmirror9.mirror.pixsystem.com")||
        dnsDomainIs(host, "pixmirror143.mirror.pixsystem.com")||
        dnsDomainIs(host, "pixmirror119.mirror.pixsystem.com")||
        dnsDomainIs(host, "pixmirror211.mirror.pixsystem.com")||
        dnsDomainIs(host, "supportcentral.gecdn.com")||
        dnsDomainIs(host, "sl.ge")||
        dnsDomainIs(host, "comcast.ipcenter.com")||
        dnsDomainIs(host, "itrc.io.comcast.net")||
        dnsDomainIs(host, "wiki.io.comcast.net")||
        dnsDomainIs(host, "tkts.io.comcast.net")||
        dnsDomainIs(host, "forms.io.comcast.net")||
        dnsDomainIs(host, "tsheets.comcastnets.net"))
      return "DIRECT";

//NBCNews Digital
//Date: 1-13-14


    if (dnsDomainIs(host, ".ilo")||
        dnsDomainIs(host, ".interactive.msnbc.com")||
        dnsDomainIs(host, ".extranet.msnbc.com")||
        dnsDomainIs(host, ".nbcnd.dc")||
        shExpMatch(host, "*virt-nv-*.msnbc.com")||
        shExpMatch(host, "*virt-nv-*.nbcnews.com")||
        shExpMatch(host, "*virt-nv-*.newsvine.com")||
        shExpMatch(host, "*virt-nv-*.today.com"))
      return "DIRECT";

    if (dnsDomainIs(host, ".ge.com")||
        dnsDomainIs(host, ".unistudios.com")||
        dnsDomainIs(host, ".sclnet.com")||
        dnsDomainIs(host, ".usanetworks.com")||
        dnsDomainIs(host, ".usacable.net")||
        dnsDomainIs(host, ".oxygen.corp")||
        dnsDomainIs(host, ".oxygentv.corp")||
        dnsDomainIs(host, ".inbcu.com")||
        dnsDomainIs(host, ".tfayd.com")||
        dnsDomainIs(host, ".eentertainment.com")||
        dnsDomainIs(host, ".corp.weather.com")||
        dnsDomainIs(host, ".comcastnets.com")||
        dnsDomainIs(host, ".COMCASTNETS.COM")||
        dnsDomainIs(host, ".tgcinc.com")||
        dnsDomainIs(host, ".teamcomcast.com")||
        dnsDomainIs(host, ".use.ucdp.net")||
        dnsDomainIs(host, ".cable.comcast.com")||
	dnsDomainIs(host, ".nbc.com"))
      return "DIRECT";

   // On CNBC Internal network use this:
   // return "PROXY proxyanbcge.nbc.com:80";

   // Otherwise use uncomment the line below:
   return "DIRECT";
  }

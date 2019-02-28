Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My orders Sign").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set DataTable("uName", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Email").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set DataTable("emailAdrs", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure DataTable("encPassword", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure DataTable("encPassword", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON" @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btnundefined").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Back @@ hightlight id_;_328968_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("User My account").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Edit").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("SafePay username").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set DataTable("uName", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure DataTable("encPassword", dtGlobalSheet) @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_btnundefined").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf19.xml_;_


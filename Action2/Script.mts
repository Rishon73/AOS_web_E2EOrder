Browser("Advantage Shopping").Page("Advantage Shopping").Link("SPEAKERS Shop Now").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=4700").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("2").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("QTY: 2").Check CheckPoint("QTY: 2")
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$438.00").Check CheckPoint("$438.00")
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("User My account").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click


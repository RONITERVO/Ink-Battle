# Copyright 2025 Roni Tervo
#
# SPDX-License-Identifier: Apache-2.0

-keepclassmembers class com.ronitervo.inkbattle.MainActivity {
    public *;
}

-keepclassmembers class com.ronitervo.inkbattle.LocalGemmaBridge {
    @android.webkit.JavascriptInterface <methods>;
}

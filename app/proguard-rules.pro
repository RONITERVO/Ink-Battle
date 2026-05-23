# Copyright 2025 Roni Tervo
#
# SPDX-License-Identifier: Apache-2.0

-keepclassmembers class com.sketchwar.ageofwar.MainActivity {
    public *;
}

-keepclassmembers class com.sketchwar.ageofwar.LocalGemmaBridge {
    @android.webkit.JavascriptInterface <methods>;
}

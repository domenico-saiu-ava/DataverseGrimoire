---
logical: "msdyn_authenticationsettings"
display: "Authentication Settings"
entitySetName: "msdyn_authenticationsettingses"
primaryId: "msdyn_authenticationsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Authentication Settings

Stores the settings for user authentication

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_authenticationsettings` |
| Display name | Authentication Settings |
| Display (plural) | Authentication Settings |
| Schema name | `msdyn_authenticationsettings` |
| Entity set (Web API) | `msdyn_authenticationsettingses` |
| Primary id attribute | `msdyn_authenticationsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_authenticationsettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
POST /api/data/v9.2/msdyn_authenticationsettingses
PATCH /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
DELETE /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_accesstokenurl`, `msdyn_actionname`, `msdyn_additionalparams`, `msdyn_authenticationclientid`, `msdyn_authenticationclientsecret`, `msdyn_authenticationscopes`, `msdyn_authenticationsettingsId`, `msdyn_Authenticationtype`, `msdyn_decryptedtokenurl`, `msdyn_endpointregion`, `msdyn_JavaScriptclientfunction`, `msdyn_name`, `msdyn_ocauthchanneltype`, `msdyn_PublickeyURL`, `msdyn_redirecturi`, `msdyn_useauthcodeflow`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_authenticationsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_authenticationsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_authenticationsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_authenticationsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_authenticationsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_authenticationsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_authenticationsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_authenticationsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authenticationsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authenticationsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authenticationsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authenticationsettings_msdyn_entr` | _n/a_ | `msdyn_authsettingsentid` | _n/a_ |
| `msdyn_authenticationsettings_msdyn_ocrichobjectmap` | _n/a_ | `msdyn_authsettingsmapid` | _n/a_ |
| `msdyn_authenticationsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_authenticationsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authenticationsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_authenticationsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_authenticationsettings.md) on 2026-05-06.
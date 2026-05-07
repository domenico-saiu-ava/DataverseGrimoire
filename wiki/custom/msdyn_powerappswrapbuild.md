---
logical: "msdyn_powerappswrapbuild"
display: "Power Apps Wrap Build"
entitySetName: "msdyn_powerappswrapbuilds"
primaryId: "msdyn_powerappswrapbuildid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Power Apps Wrap Build

Stores build artifacts from the Power Apps Wrap build pipeline

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_powerappswrapbuild` |
| Display name | Power Apps Wrap Build |
| Display (plural) | Power Apps Wrap Builds |
| Schema name | `msdyn_powerappswrapbuild` |
| Entity set (Web API) | `msdyn_powerappswrapbuilds` |
| Primary id attribute | `msdyn_powerappswrapbuildid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_powerappswrapbuilds?$select=name&$top=10
GET /api/data/v9.2/msdyn_powerappswrapbuilds(<guid>)
POST /api/data/v9.2/msdyn_powerappswrapbuilds
PATCH /api/data/v9.2/msdyn_powerappswrapbuilds(<guid>)
DELETE /api/data/v9.2/msdyn_powerappswrapbuilds(<guid>)
```

## Attributes

Writable: **13** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_apptype`, `msdyn_buildid`, `msdyn_mobileappid`, `msdyn_platformtype`, `msdyn_powerappswrapbuildid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_artifact`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_powerappswrapbuild_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_powerappswrapbuild_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_powerappswrapbuild_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_powerappswrapbuild_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_powerappswrapbuild` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_powerappswrapbuild` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_powerappswrapbuild` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_powerappswrapbuild` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_powerappswrapbuild_msdyn_artifact` | [fileattachment](fileattachment.md) | `msdyn_artifact` | `msdyn_artifact` |
| `msdyn_mobileapp_msdyn_powerappswrapbuild_msdyn_mobileappid` | [msdyn_mobileapp](msdyn_mobileapp.md) | `msdyn_mobileappid` | `msdyn_mobileapp_msdyn_powerappswrapbuild_msdyn_mobileappid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_powerappswrapbuild_SyncErrors` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `regardingobjectid` | `regardingobjectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_AsyncOperations` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `regardingobjectid` | `regardingobjectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_MailboxTrackingFolders` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `regardingobjectid` | `regardingobjectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_UserEntityInstanceDatas` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `objectid` | `objectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_ProcessSession` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `regardingobjectid` | `regardingobjectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_BulkDeleteFailures` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `regardingobjectid` | `regardingobjectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_PrincipalObjectAttributeAccesses` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `objectid` | `objectid_msdyn_powerappswrapbuild` |
| `msdyn_powerappswrapbuild_FileAttachments` | [msdyn_powerappswrapbuild](msdyn_powerappswrapbuild.md) | `objectid` | `objectid_msdyn_powerappswrapbuild` |


## Source

Generated from [msdyn_powerappswrapbuild (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_powerappswrapbuild')) on 2026-05-07.
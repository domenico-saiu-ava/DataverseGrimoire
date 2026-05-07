---
logical: "msdyn_ocpaymentprofile"
display: "Profilo di pagamento multicanale"
entitySetName: "msdyn_ocpaymentprofiles"
primaryId: "msdyn_ocpaymentprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo di pagamento multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocpaymentprofile` |
| Display name | Profilo di pagamento multicanale |
| Display (plural) | Profili di pagamento multicanale |
| Schema name | `msdyn_ocpaymentprofile` |
| Entity set (Web API) | `msdyn_ocpaymentprofiles` |
| Primary id attribute | `msdyn_ocpaymentprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocpaymentprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
POST /api/data/v9.2/msdyn_ocpaymentprofiles
PATCH /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_occhanneltype`, `msdyn_ocpaymentprofileid`, `msdyn_ocpaymentprofilename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocpaymentprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocpaymentprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocpaymentprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocpaymentprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocpaymentprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocpaymentprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocpaymentprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocpaymentprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocpaymentprofile_msdyn_ocrichobjectmap_ocpaymentprofileid` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `msdyn_ocpaymentprofileid` | `msdyn_ocpaymentprofileid` |
| `msdyn_ocpaymentprofile_SyncErrors` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_DuplicateMatchingRecord` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_DuplicateBaseRecord` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `baserecordid` | `baserecordid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_AsyncOperations` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_MailboxTrackingFolders` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_UserEntityInstanceDatas` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `objectid` | `objectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_ProcessSession` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_BulkDeleteFailures` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocpaymentprofile` |
| `msdyn_ocpaymentprofile_PrincipalObjectAttributeAccesses` | [msdyn_ocpaymentprofile](msdyn_ocpaymentprofile.md) | `objectid` | `objectid_msdyn_ocpaymentprofile` |


## Source

Generated from [msdyn_ocpaymentprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocpaymentprofile')) on 2026-05-07.
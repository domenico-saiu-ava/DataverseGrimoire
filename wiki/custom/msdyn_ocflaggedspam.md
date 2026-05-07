---
logical: "msdyn_ocflaggedspam"
display: "Posta indesiderata contrassegnata"
entitySetName: "msdyn_ocflaggedspams"
primaryId: "msdyn_ocflaggedspamid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Posta indesiderata contrassegnata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocflaggedspam` |
| Display name | Posta indesiderata contrassegnata |
| Display (plural) | Posta indesiderata contrassegnata |
| Schema name | `msdyn_ocflaggedspam` |
| Entity set (Web API) | `msdyn_ocflaggedspams` |
| Primary id attribute | `msdyn_ocflaggedspamid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocflaggedspams?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
POST /api/data/v9.2/msdyn_ocflaggedspams
PATCH /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
DELETE /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flaggedby`, `msdyn_flaggedstatus`, `msdyn_name`, `msdyn_ocflaggedspamid`, `msdyn_ruleid`, `msdyn_spamtype`, `msdyn_spamvalue`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `msdyn_ruleid` | `msdyn_ruleid` |
| `lk_msdyn_ocflaggedspam_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocflaggedspam_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocflaggedspam_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocflaggedspam_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocflaggedspam` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocflaggedspam` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocflaggedspam` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocflaggedspam` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocflaggedspam_SyncErrors` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_DuplicateMatchingRecord` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_DuplicateBaseRecord` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `baserecordid` | `baserecordid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_AsyncOperations` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_MailboxTrackingFolders` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_UserEntityInstanceDatas` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `objectid` | `objectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_ProcessSession` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_BulkDeleteFailures` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `objectid` | `objectid_msdyn_ocflaggedspam` |
| `msdyn_ocflaggedspam_Annotations` | [msdyn_ocflaggedspam](msdyn_ocflaggedspam.md) | `objectid` | `objectid_msdyn_ocflaggedspam` |


## Source

Generated from [msdyn_ocflaggedspam (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocflaggedspam')) on 2026-05-07.
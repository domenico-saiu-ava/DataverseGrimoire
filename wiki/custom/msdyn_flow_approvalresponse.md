---
logical: "msdyn_flow_approvalresponse"
display: "Risposta di approvazione"
entitySetName: "msdyn_flow_approvalresponses"
primaryId: "msdyn_flow_approvalresponseid"
primaryName: "msdyn_flow_approvalresponse_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta di approvazione

Singola risposta a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalresponse` |
| Display name | Risposta di approvazione |
| Display (plural) | Risposte di approvazione |
| Schema name | `msdyn_flow_approvalresponse` |
| Entity set (Web API) | `msdyn_flow_approvalresponses` |
| Primary id attribute | `msdyn_flow_approvalresponseid` |
| Primary name attribute | `msdyn_flow_approvalresponse_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvalresponses?$select=msdyn_flow_approvalresponse_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
POST /api/data/v9.2/msdyn_flow_approvalresponses
PATCH /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvalresponses(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_approvalresponse_additionalfields`, `msdyn_flow_approvalresponse_approval`, `msdyn_flow_approvalresponse_approvalstagekey`, `msdyn_flow_approvalresponse_comments`, `msdyn_flow_approvalresponse_name`, `msdyn_flow_approvalresponse_response`, `msdyn_flow_approvalresponse_stage`, `msdyn_flow_approvalresponse_stepnumber`, `msdyn_flow_approvalresponseid`, `msdyn_flow_approvalresponseidx_approvalid`, `msdyn_flow_approvalresponseidx_owninguserid`, `msdyn_flow_approvalresponseidx_stage`, `overriddencreatedon`, `ownerid`, `stagenumber`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_approvalresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_approvalresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_approvalresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_approvalresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_approvalresponse` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_flow_approvalrelationship_approvalresponses` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalresponse_approval` | `msdyn_flow_approvalresponse_approval` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalresponse_SyncErrors` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_DuplicateMatchingRecord` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_DuplicateBaseRecord` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_AsyncOperations` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_MailboxTrackingFolders` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_UserEntityInstanceDatas` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `objectid` | `objectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_ProcessSession` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_BulkDeleteFailures` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `objectid` | `objectid_msdyn_flow_approvalresponse` |


## Source

Generated from [msdyn_flow_approvalresponse (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_approvalresponse')) on 2026-05-07.
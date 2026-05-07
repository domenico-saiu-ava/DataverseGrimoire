---
logical: "msdyn_flow_flowapproval"
display: "Approvazione di Flow"
entitySetName: "msdyn_flow_flowapprovals"
primaryId: "msdyn_flow_flowapprovalid"
primaryName: "msdyn_flow_flowapproval_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Approvazione di Flow

Dati di Microsoft Flow associati a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_flowapproval` |
| Display name | Approvazione di Flow |
| Display (plural) | Approvazioni di Flow |
| Schema name | `msdyn_flow_flowapproval` |
| Entity set (Web API) | `msdyn_flow_flowapprovals` |
| Primary id attribute | `msdyn_flow_flowapprovalid` |
| Primary name attribute | `msdyn_flow_flowapproval_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_flowapprovals?$select=msdyn_flow_flowapproval_name&$top=10
GET /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
POST /api/data/v9.2/msdyn_flow_flowapprovals
PATCH /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
DELETE /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_flowapproval_approval`, `msdyn_flow_flowapproval_flowculture`, `msdyn_flow_flowapproval_flowid`, `msdyn_flow_flowapproval_flowname`, `msdyn_flow_flowapproval_flownotificationuri`, `msdyn_flow_flowapproval_flowrunsequenceid`, `msdyn_flow_flowapproval_name`, `msdyn_flow_flowapproval_sendflowemail`, `msdyn_flow_flowapproval_sendflowpush`, `msdyn_flow_flowapprovalid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_flowapproval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_flowapproval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_flowapproval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_flowapproval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_flowapproval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_flowapproval` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_flowapproval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_flowapproval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_flow_approvalrelationship_flowapprovals` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_flowapproval_approval` | `msdyn_flow_flowapproval_approval` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_flowapproval_SyncErrors` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_DuplicateMatchingRecord` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_DuplicateBaseRecord` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `baserecordid` | `baserecordid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_AsyncOperations` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_MailboxTrackingFolders` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_UserEntityInstanceDatas` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `objectid` | `objectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_ProcessSession` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_BulkDeleteFailures` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_PrincipalObjectAttributeAccesses` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `objectid` | `objectid_msdyn_flow_flowapproval` |


## Source

Generated from [msdyn_flow_flowapproval (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_flowapproval')) on 2026-05-07.
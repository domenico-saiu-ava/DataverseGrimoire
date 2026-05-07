---
logical: "msdyn_dailyleadkpiitem"
display: "KPI giornalieri per il lead"
entitySetName: "msdyn_dailyleadkpiitems"
primaryId: "msdyn_dailyleadkpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# KPI giornalieri per il lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyleadkpiitem` |
| Display name | KPI giornalieri per il lead |
| Display (plural) | dailyleadkpiitems |
| Schema name | `msdyn_dailyleadkpiitem` |
| Entity set (Web API) | `msdyn_dailyleadkpiitems` |
| Primary id attribute | `msdyn_dailyleadkpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyleadkpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyleadkpiitems
PATCH /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyleadkpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_computationaccuracy`, `msdyn_dailyleadkpiitemid`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_leadid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyleadkpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyleadkpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyleadkpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyleadkpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dailyleadkpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_lead_dailyleadkpiitem_entityid` | [lead](lead.md) | `msdyn_entityid` | `msdyn_entityid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyleadkpiitem_SyncErrors` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_AsyncOperations` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_MailboxTrackingFolders` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_UserEntityInstanceDatas` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `objectid` | `objectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_ProcessSession` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_BulkDeleteFailures` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyleadkpiitem` |
| `msdyn_dailyleadkpiitem_PrincipalObjectAttributeAccesses` | [msdyn_dailyleadkpiitem](msdyn_dailyleadkpiitem.md) | `objectid` | `objectid_msdyn_dailyleadkpiitem` |


## Source

Generated from [msdyn_dailyleadkpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dailyleadkpiitem')) on 2026-05-07.